import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v7 } from "uuid";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => v7()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users, {
  id: z.string().uuid().optional(),
  name: z.string().max(255),
  email: z.string().email(),
  password: z.string().max(255),
});
// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);
