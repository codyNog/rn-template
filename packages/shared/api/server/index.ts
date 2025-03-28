import { Hono } from "hono";
import type { Bindings } from "../types";

export const server = new Hono<{ Bindings: Bindings }>();
