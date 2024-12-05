import type { Props, UserFormValues } from "@/components/UserForm/types";
import { UserFormResolver } from "@/components/UserForm/types";
import { useI18n } from "@/hooks/i18n";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

export const useUserForm = ({ action, defaultValues }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserFormValues>({ resolver: UserFormResolver, defaultValues });
  const t = useI18n();

  const onSubmit = useCallback(() => {
    handleSubmit(async (values) => {
      await action(values);
      console.log(t);
    })();
  }, [handleSubmit, action, t]);

  return { onSubmit, errors, control, t };
};
