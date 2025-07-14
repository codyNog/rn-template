import type { I18nKey } from "gen/i18n/types";
import { Controller } from "react-hook-form";
import { Button, Stack, TextField, VisuallyHidden } from "ui";
import { useUserForm } from "./hooks";
import type { Props } from "./types";

/**
 * Form Component for create or update User.
 * @param {Props} props {@link Props}
 */
export const UserForm = (props: Props) => {
  const { onSubmit, errors, control, t } = useUserForm(props);
  return (
    <Stack spacing={4} direction="column">
      <Controller
        control={control}
        name="id"
        render={({ field }) => (
          <VisuallyHidden>
            <TextField
              {...field}
              label={"id"}
              errorMessage={
                errors.id?.message && t(errors.id.message as I18nKey)
              }
            />
          </VisuallyHidden>
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextField
            {...field}
            label={t("form.name" as I18nKey)}
            supportingText={t("form.namePlaceholder" as I18nKey)}
            errorMessage={
              errors.name?.message && t(errors.name.message as I18nKey)
            }
            onChangeText={(text) => {
              field.onChange(text);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            {...field}
            label={t("form.email" as I18nKey)}
            supportingText={t("form.emailPlaceholder" as I18nKey)}
            keyboardType="email-address"
            autoCapitalize="none"
            errorMessage={
              errors.email?.message && t(errors.email.message as I18nKey)
            }
            onChangeText={(text) => {
              field.onChange(text);
            }}
          />
        )}
      />
      <Button onPress={onSubmit}>{t("form.submit" as I18nKey)}</Button>
    </Stack>
  );
};
