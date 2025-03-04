"use client";
import { Text } from "ui/Text";
import { View } from "ui/View";
import { useUserList } from "./hooks";
import _styles from "./index.module.css";
import type { Props } from "./types";

export const UserList = (props: Props) => {
  const { users } = useUserList(props);
  return (
    <View>
      {users?.map((user) => {
        return (
          <View key={user.id}>
            <Text>ID: {user.id}</Text>
            <Text>Created: {user.createdAt}</Text>
            <Text>Updated: {user.updatedAt}</Text>
          </View>
        );
      })}
    </View>
  );
};
