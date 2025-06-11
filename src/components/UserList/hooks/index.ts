import { useUsers } from "packages/shared/libs/convex/hooks";
import type { Props } from "../types";

export const useUserList = (props: Props) => {
  const users = useUsers();

  console.log(users);

  return {
    users,
    isLoading: users === undefined,
    onUserSelect: props.onUserSelect,
  };
};
