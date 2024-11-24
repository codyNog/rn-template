import React, { forwardRef } from "react";
import type { TextInput } from "react-native";
import { Input as I, type InputProps, Text } from "tamagui";

type Props = InputProps & {
  error?: string;
};

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <>
      <I {...props} ref={ref} />
      {props.error && <Text color={"red"}>{props.error}</Text>}
    </>
  );
});
