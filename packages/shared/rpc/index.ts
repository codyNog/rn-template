import type { AppType } from "../api/route";
import { SERVER_URL } from "../constants/env";
const { hc } = require("hono/dist/client") as typeof import("hono/client");

export const rpcClient = hc<AppType>(SERVER_URL);
