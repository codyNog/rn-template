import { useUsersNewScreen } from "./hooks";
import { UserForm } from "@/components/UserForm";

const Screen = () => {
  const { action } = useUsersNewScreen();
  return <UserForm action={action} />;
};

export default Screen;
