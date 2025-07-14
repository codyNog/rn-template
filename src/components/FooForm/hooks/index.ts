import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useI18n } from "shared/libs/i18n";
import type { FooFormValues, Props } from "@/components/FooForm/types";
import { fooFormResolver } from "@/components/FooForm/types";

export const useFooForm = ({ action, defaultValues }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FooFormValues>({ resolver: fooFormResolver, defaultValues });
  const t = useI18n();

  const onSubmit = useCallback(() => {
    handleSubmit(async (values) => {
      await action(values);
      console.log(t);
    })();
  }, [handleSubmit, action, t]);

  return { onSubmit, errors, control, t };
};
