import { useUserForm } from "@/components/UserForm/hooks";
import type { Props } from "@/components/UserForm/types";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { Button, Form, Input, Text, VisuallyHidden, YStack } from "ui";

/**
 * Form Component for create or update User.
 * @param {Props} props {@link Props}
 */
export const UserForm = forwardRef<HTMLFormElement, Props>((props, _ref) => {
  const { onSubmit, errors, control, t } = useUserForm(props);
  return (
    <Form>
      <YStack>
        <Text>UserForm</Text>
        {errors && <Text>errors</Text>}
        <Controller
          control={control}
          name="id"
          render={({ field }) => (
            <VisuallyHidden>
              <Input
                {...field}
                error={errors.id?.message && t(errors.id.message)}
              />
            </VisuallyHidden>
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              {...field}
              error={errors.name?.message && t(errors.name.message)}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              {...field}
              error={errors.email?.message && t(errors.email.message)}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              {...field}
              error={errors.password?.message && t(errors.password.message)}
            />
          )}
        />
        <Form.Trigger asChild>
          <Button onPress={onSubmit}>{t("submit")}</Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
});
