"use client";
import { Grid, GridItem, Typography } from "@codynog/rn-ui";
import { Link } from "expo-router";
import { View } from "react-native";
import { useUserList } from "./hooks";
import type { Props } from "./types";

export const UserList = (props: Props) => {
  const { users } = useUserList(props);
  return (
    <Grid>
      {users?.map((user) => {
        return (
          <Link href={`/users/${user._id}`} key={user._id}>
            <GridItem span={4}>
              <Typography>ID: {user._id}</Typography>
              <Typography>Name: {user.name || "No name"}</Typography>
              <Typography>Email: {user.email || "No email"}</Typography>
              <Typography>
                Created: {new Date(user.createdAt).toLocaleString()}
              </Typography>
              <Typography>
                Updated: {new Date(user.updatedAt).toLocaleString()}
              </Typography>
            </GridItem>
          </Link>
        );
      })}
    </Grid>
  );
};
