import useSWR from "swr";
import type { Props } from "../types";
import { rpcClient } from "shared/rpc";

// biome-ignore lint:
export const useUserList = ({}: Props) => {
  const { data: users } = useSWR("/api/users", () =>
    rpcClient.users.$get().then((res) => res.json()),
  );

  return { users };
};
