import { server } from "../server";
import { usersRouter } from "./users";

export const route = server
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .route("/", usersRouter);

export type AppType = typeof route;
