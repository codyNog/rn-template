import { useFooForm } from "@/components/_examples/FooForm/hooks";
import type { Props } from "@/components/_examples/FooForm/types";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  Switch,
  TextArea,
  VisuallyHidden,
  YStack,
} from "ui";

/**
 * Form Component for create or update Foo.
 * @param {Props} props {@link Props}
 */
export const FooForm = forwardRef<HTMLFormElement, Props>((props, _ref) => {
  const { onSubmit, errors, control, t } = useFooForm(props);
  return (
    <Form onSubmit={onSubmit}>
      <YStack gap={"$4"}>
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
          name="description"
          render={({ field }) => (
            <TextArea
              {...field}
              error={
                errors.description?.message && t(errors.description.message)
              }
            />
          )}
        />
        <Controller
          control={control}
          name={"visible"}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              label={t("visible")}
            />
          )}
        />
        <Form.Trigger asChild>
          <Button>{t("submit")}</Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
});