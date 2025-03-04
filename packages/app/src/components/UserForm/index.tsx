import { useUserForm } from "@/components/UserForm/hooks";
import type { Props } from "@/components/UserForm/types";
import type { I18nKey } from "gen/i18n/types";
import { Controller } from "react-hook-form";
import { Button } from "ui/Button";
import { Form } from "ui/Form";
import { Grid } from "ui/Grid";
import { YStack } from "ui/Stack";
import { TextField } from "ui/TextField";
import { VisuallyHidden } from "ui/VisuallyHidden";

/**
 * Form Component for create or update Foo.
 * @param {Props} props {@link Props}
 */
export const UserForm = (props: Props) => {
  const { onSubmit, errors, control, t } = useUserForm(props);
  return (
    <Form>
      <YStack gap={"$4"}>
        <Grid.Row>
          <Grid.Column span={4}>
            <Controller
              control={control}
              name="id"
              render={({ field }) => (
                <VisuallyHidden>
                  <TextField
                    {...field}
                    label={"id"}
                    error={
                      errors.id?.message && t(errors.id.message as I18nKey)
                    }
                  />
                </VisuallyHidden>
              )}
            />
          </Grid.Column>
        </Grid.Row>
        <Form.Trigger asChild>
          <Button onPress={onSubmit}>{t("submit")}</Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
};
