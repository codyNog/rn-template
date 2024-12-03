import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v7 } from "uuid";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => v7()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});
