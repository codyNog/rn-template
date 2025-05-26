import { hc } from "hono/client";
import type { AppType } from "../api/route";
import { SERVER_URL } from "../constants/env";

export const rpcClient = hc<AppType>(SERVER_URL);
