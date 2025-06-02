import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { v7 } from "uuid";
import type { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => v7()),
  createdAt: integer("created_at")
    .notNull()
    .$defaultFn(() => Date.now()),
  updatedAt: integer("updated_at")
    .notNull()
    .$defaultFn(() => Date.now()),
});

export const usersRelations = relations(users, () => ({}));

export const insertUserSchema = createInsertSchema(users, {});
export type InsertUserSchema = z.infer<typeof insertUserSchema>;

export const selectUserSchema = createSelectSchema(users, {});
export type SelectUserSchema = z.infer<typeof selectUserSchema>;
