"use client";
import { useId } from "react";
import {
  Label,
  RadioGroup as RG,
  type SizeTokens,
  XStack,
  YStack,
} from "tamagui";

type Option = {
  value: string;
  label: string;
};

type ItemProps = Option & {
  size: SizeTokens;
};

const Item = ({ size, value, label }: ItemProps) => {
  const id = useId();
  return (
    <XStack width={300} alignItems="center" gap="$4">
      <RG.Item value={value} id={id} size={size}>
        <RG.Indicator />
      </RG.Item>
      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
};

type Props = {
  options: Option[];
};

export const RadioGroup = ({ options }: Props) => {
  return (
    <YStack gap="$4">
      {options.map((option) => (
        <Item key={option.value} size="md" {...option} />
      ))}
    </YStack>
  );
};
