import { Button, Grid, GridItem, TextField, VisuallyHidden } from "ui";
import type { I18nKey } from "gen/i18n/types";
import { Controller } from "react-hook-form";
import { useFooForm } from "./hooks";
import type { Props } from "./types";

/**
 * Form Component for create or update Foo.
 * @param {Props} props {@link Props}
 */
export const FooForm = (props: Props) => {
  const { onSubmit, errors, control, t } = useFooForm(props);
  return (
    <Grid>
      <GridItem span={12}>
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
      </GridItem>
      <GridItem span={4}>
        <Button onPress={onSubmit}>{t("submit" as I18nKey)}</Button>
      </GridItem>
    </Grid>
  );
};
