import { SERVER_URL } from "shared/constants/env";
import type { AppType } from "../../../server/src/route";
const { hc } = require("hono/dist/client") as typeof import("hono/client");

export const rpcClient = hc<AppType>(SERVER_URL);
