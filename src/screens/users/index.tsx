import { Suspense } from "react";
import { Text } from "react-native";
import { UserList } from "src/components/UserList";
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
