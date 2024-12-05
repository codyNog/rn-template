"use client";
import { useUserList } from "./hooks";
import _styles from "./index.module.css";
import type { Props } from "./types";
import { Text, View } from "ui";

export const UserList = (props: Props) => {
  const { users } = useUserList(props);
  return (
    <View>
      {users?.map((user) => {
        return (
          <View key={user.id}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        );
      })}
    </View>
  );
};
