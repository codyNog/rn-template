import { defineTable } from "convex/server";
import { type Infer, v } from "convex/values";
import type { Id } from "../../../convex/convex/_generated/dataModel";

const userSchema = v.object({
  name: v.optional(v.string()),
  email: v.optional(v.string()),
  createdAt: v.number(),
  updatedAt: v.number(),
});

const users = defineTable(userSchema).index("by_created_at", ["createdAt"]);

export type User = Infer<typeof userSchema>;

export type UserId = Id<"users">;

export const schemas = {
  users,
};
