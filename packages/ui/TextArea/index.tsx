import { forwardRef } from "react";
import type { TextInput } from "react-native";
import { TextArea as TA, Text, type TextAreaProps } from "tamagui";

type Props = TextAreaProps & {
  error?: string;
};

export const TextArea = forwardRef<TextInput, Props>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <TA ref={ref} {...props} />
        {error && <Text color="red">{error}</Text>}
      </>
    );
  },
);
