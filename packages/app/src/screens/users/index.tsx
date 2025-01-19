import { UserList } from "@/components/UserList";
import { useUsersScreen } from "./hooks";

const Screen = () => {
  useUsersScreen();
  return <UserList />;
};

export default Screen;
