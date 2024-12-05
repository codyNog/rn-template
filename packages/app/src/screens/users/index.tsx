import { useUsersScreen } from "./hooks";
import { UserList } from "@/components/UserList";

const Screen = () => {
  useUsersScreen();
  return <UserList />;
};

export default Screen;
