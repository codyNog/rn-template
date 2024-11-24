import type {
  FooFormValues,
  Props,
} from "@/components/_examples/FooForm/types";
import { FooFormResolver } from "@/components/_examples/FooForm/types";
import { useI18n } from "@/hooks/i18n";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const DEFAULT_VALUES: FooFormValues = {
  id: "",
  name: "",
  description: "",
  visible: false,
};

export const useFooForm = ({ action, defaultValues }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FooFormValues>({
    resolver: FooFormResolver,
    defaultValues: defaultValues || DEFAULT_VALUES,
  });
  const t = useI18n();

  const onSubmit = useCallback(() => {
    handleSubmit(async (values) => {
      await action(values);
      console.log(t);
    })();
  }, [handleSubmit, action, t]);

  return { onSubmit, errors, control, t };
};
