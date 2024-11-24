import { forwardRef } from "react";
import type { Switch as SwitchPrimitive } from "react-native";
import {
  Label,
  Switch as S,
  Separator,
  type SwitchProps,
  XStack,
} from "tamagui";

type Props = SwitchProps & {
  label?: string;
};

export const Switch = forwardRef<SwitchPrimitive, Props>(
  ({ size, defaultChecked, label, id, ...rest }, ref) => {
    return (
      <XStack alignItems="center" gap="$4">
        {label && (
          <>
            <Label
              paddingRight="$0"
              justifyContent="flex-end"
              size={size}
              htmlFor={id}
            >
              {label}
            </Label>
            <Separator minHeight={20} vertical />
          </>
        )}
        <S {...rest} id={id} size={size} ref={ref} inset="auto">
          <S.Thumb animation="quicker" />
        </S>
      </XStack>
    );
  },
);
