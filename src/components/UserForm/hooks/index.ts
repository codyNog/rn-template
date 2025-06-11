import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useI18n } from "shared/libs/i18n";
import type { Props, UserFormValues } from "src/components/UserForm/types";
import { UserFormResolver } from "src/components/UserForm/types";

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
