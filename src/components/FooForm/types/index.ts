import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const fooFormValuesSchema = z.object({
  id: z.string().optional(),
});

export type FooFormValues = z.infer<typeof fooFormValuesSchema>;

export const fooFormResolver = zodResolver(fooFormValuesSchema);

export type Props = {
  action: (value: FooFormValues) => Promise<void>;
  defaultValues?: FooFormValues;
};
