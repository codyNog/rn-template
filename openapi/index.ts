#!/usr/bin/env bun

import { type ChildProcess, spawn } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";

interface CliOptions {
  url?: string;
  outputDir?: string;
  filename?: string;
  serverTimeout?: number;
}

const DEFAULT_OPTIONS: Required<CliOptions> = {
  url: "http://localhost:4000/swagger/json",
  outputDir: "./openapi/schemas",
  filename: "openapi.json",
  serverTimeout: 10000,
};

// OpenAPIスキーマを修正する関数
function fixOpenAPISchema(schema: any): any {
  const fixedSchema = { ...schema };

  // パスオブジェクトを走査
  if (fixedSchema.paths) {
    Object.keys(fixedSchema.paths).forEach((path) => {
      const pathItem = fixedSchema.paths[path];

      // 各HTTPメソッドを走査
      Object.keys(pathItem).forEach((method) => {
        const operation = pathItem[method];

        // レスポンスオブジェクトを修正
        if (operation.responses) {
          Object.keys(operation.responses).forEach((statusCode) => {
            const response = operation.responses[statusCode];

            // descriptionが無い場合は追加
            if (!response.description) {
              response.description = `Response for ${method.toUpperCase()} ${path}`;
            }

            // contentがある場合はスキーマ参照を修正
            if (response.content && !response.$ref) {
              const content = response.content;
              if (
                content["application/json"] &&
                content["application/json"].schema
              ) {
                // スキーマをそのまま使用
                response.schema = content["application/json"].schema;
              }
            }
          });
        }
      });
    });
  }

  return fixedSchema;
}

async function isServerRunning(url: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

async function startServer(): Promise<ChildProcess> {
  console.log("🚀 Starting bun server...");

  const server = spawn("bun", ["server", "dev"], {
    stdio: ["ignore", "pipe", "pipe"],
    detached: false,
  });

  server.stdout?.on("data", (data) => {
    console.log(`📤 Server output: ${data}`);
  });

  server.stderr?.on("data", (data) => {
    console.error(`⚠️ Server error: ${data}`);
  });

  return server;
}

async function waitForServer(url: string, timeout: number): Promise<boolean> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (await isServerRunning(url)) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("⏳ Waiting for server to start...");
  }

  return false;
}

async function stopServer(server: ChildProcess) {
  return new Promise<void>((resolve) => {
    console.log("🛑 Stopping server...");

    if (server.pid) {
      try {
        process.kill(server.pid, "SIGTERM");
      } catch (error) {
        console.error("Warning: Failed to kill server process:", error);
      }
    }

    server.on("exit", () => {
      console.log("Server stopped successfully");
      resolve();
    });

    setTimeout(() => {
      try {
        server.kill("SIGKILL");
      } catch (error) {
        console.error("Warning: Failed to force kill server:", error);
      }
      resolve();
    }, 5000);
  });
}

async function downloadSwaggerJson(options: CliOptions = {}) {
  const { url, outputDir, filename, serverTimeout } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };
  let server: ChildProcess | null = null;

  try {
    const isRunning = await isServerRunning(url);

    if (!isRunning) {
      console.log("📡 Server is not running, attempting to start it...");
      server = await startServer();

      const serverStarted = await waitForServer(url, serverTimeout);
      if (!serverStarted) {
        throw new Error("Server failed to start within the timeout period");
      }
    }

    console.log(`📥 Downloading Swagger JSON from ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      );
    }

    const swaggerJson = await response.json();

    // OpenAPIスキーマを修正
    console.log("🔧 Fixing OpenAPI schema...");
    const fixedSwaggerJson = fixOpenAPISchema(swaggerJson);

    if (!existsSync(outputDir)) {
      console.log(`📁 Creating directory: ${outputDir}`);
      mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = join(outputDir, filename);

    await Bun.write(outputPath, JSON.stringify(fixedSwaggerJson, null, 2));

    console.log(`✅ Successfully saved fixed Swagger JSON to: ${outputPath}`);
  } catch (error) {
    console.error("❌ Error occurred:", error);
    throw error;
  } finally {
    if (server) {
      await stopServer(server);
    }
  }
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const options: CliOptions = {};

  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];

    switch (flag) {
      case "--url":
        options.url = value;
        break;
      case "--output-dir":
        options.outputDir = value;
        break;
      case "--filename":
        options.filename = value;
        break;
      case "--server-timeout":
        options.serverTimeout = Number.parseInt(value);
        break;
      default:
        console.error(`Unknown flag: ${flag}`);
        process.exit(1);
    }
  }

  downloadSwaggerJson(options).catch((error) => {
    console.error("Failed to download Swagger JSON:", error);
    process.exit(1);
  });
}

export { downloadSwaggerJson };
