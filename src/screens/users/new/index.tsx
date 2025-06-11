import { UserForm } from "src/components/UserForm";
import { useUsersNewScreen } from "./hooks";

const Screen = () => {
  const { action } = useUsersNewScreen();
  return <UserForm action={action} />;
};

export default Screen;
