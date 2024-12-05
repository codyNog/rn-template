import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { insertUserSchema } from "../../../../../server/src/schemas/users";

const UserFormValuesSchema = insertUserSchema;
export type UserFormValues = z.infer<typeof UserFormValuesSchema>;

export const UserFormResolver = zodResolver(UserFormValuesSchema);

export type Props = {
  action: (value: UserFormValues) => Promise<void>;
  defaultValues?: UserFormValues;
};
