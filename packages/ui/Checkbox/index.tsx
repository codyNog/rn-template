import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { forwardRef, useId } from "react";
import { Checkbox as Cb, type CheckboxProps, Label, XStack } from "tamagui";

type Props = CheckboxProps & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ size, label, id = useId(), ...checkboxProps }, ref) => {
    return (
      <XStack width={300} alignItems="center" gap="$4">
        <Cb {...checkboxProps} id={id} size={size} inset={"auto"} ref={ref}>
          <Cb.Indicator>
            <CheckIcon />
          </Cb.Indicator>
        </Cb>
        {label && (
          <Label size={size} htmlFor={id}>
            {label}
          </Label>
        )}
      </XStack>
    );
  },
);
