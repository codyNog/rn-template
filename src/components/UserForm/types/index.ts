import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "packages/shared/convex/schema";
import { z } from "zod";

const UserFormValuesSchema = z.object({
  name: z.string().min(1, "form.nameRequired"),
  email: z.string().email("form.emailInvalid"),
  id: z.string().optional(),
}) satisfies z.ZodType<Omit<User, "createdAt" | "updatedAt">>;

export type UserFormValues = z.infer<typeof UserFormValuesSchema>;

export const UserFormResolver = zodResolver(UserFormValuesSchema);

export type Props = {
  action: (value: UserFormValues) => Promise<void>;
  defaultValues?: Partial<UserFormValues>;
};
