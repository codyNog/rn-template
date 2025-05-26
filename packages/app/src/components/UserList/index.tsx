"use client";
import { Typography } from "@codynog/rn-ui";
import { View } from "react-native";
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
            <Typography>ID: {user.id}</Typography>
            <Typography>Created: {user.createdAt}</Typography>
            <Typography>Updated: {user.updatedAt}</Typography>
          </View>
        );
      })}
    </View>
  );
};
