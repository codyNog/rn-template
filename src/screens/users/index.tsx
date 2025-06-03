import { UserList } from "@/components/UserList";
import { Suspense } from "react";
import { Text } from "react-native";
import { useUsersScreen } from "./hooks";

const Screen = () => {
  useUsersScreen();
  return (
    <Suspense fallback={<Text>Loading users...</Text>}>
      <UserList />
    </Suspense>
  );
};

export default Screen;
