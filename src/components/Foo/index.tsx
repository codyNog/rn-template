"use client";
import { Text } from "react-native";
import { useFoo } from "./hooks";
import type { Props } from "./types";

export const Foo = (props: Props) => {
  useFoo(props);
  return <Text>Foo</Text>;
};
