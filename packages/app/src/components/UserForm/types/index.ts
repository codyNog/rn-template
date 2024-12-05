import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "shared/schemas/users";
import type z from "zod";

const UserFormValuesSchema = insertUserSchema;
export type UserFormValues = z.infer<typeof UserFormValuesSchema>;

export const UserFormResolver = zodResolver(UserFormValuesSchema);

export type Props = {
  action: (value: UserFormValues) => Promise<void>;
  defaultValues?: UserFormValues;
};
