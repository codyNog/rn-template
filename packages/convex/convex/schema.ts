import { defineSchema } from "convex/server";
import { schemas } from "shared/convex/schema";

export default defineSchema(schemas, { schemaValidation: true });
