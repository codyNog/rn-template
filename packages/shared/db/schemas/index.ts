import { relations, sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { v7 } from "uuid";
import type { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => v7()),
  createdAt: text("created_at").notNull().default(sql`(current_timestamp)`),
  updatedAt: text("updated_at").notNull().default(sql`(current_timestamp)`),
});

export const usersRelations = relations(users, () => ({}));

export const insertUserSchema = createInsertSchema(users);
export type InsertUserSchema = z.infer<typeof insertUserSchema>;

export const selectUserSchema = createSelectSchema(users);
export type SelectUserSchema = z.infer<typeof selectUserSchema>;
