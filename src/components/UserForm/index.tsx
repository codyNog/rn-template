import { useUserForm } from "@/components/UserForm/hooks";
import type { Props } from "@/components/UserForm/types";
import { Button, Stack, TextField, VisuallyHidden } from "@codynog/rn-ui";
import type { I18nKey } from "gen/i18n/types";
import { Controller } from "react-hook-form";

/**
 * Form Component for create or update Foo.
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
      <Button onPress={onSubmit}>{t("submit" as I18nKey)}</Button>
    </Stack>
  );
};
