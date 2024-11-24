import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const FooFormValuesSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  description: z.string(),
  visible: z.boolean(),
});

export type FooFormValues = z.infer<typeof FooFormValuesSchema>;

export const FooFormResolver = zodResolver(FooFormValuesSchema);

export type Props = {
  action: (value: FooFormValues) => Promise<void>;
  defaultValues?: FooFormValues;
};
