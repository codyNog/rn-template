import { useSuspenseQuery } from "@tanstack/react-query";
import { rpcClient } from "shared/rpc";
import type { Props } from "../types";

// biome-ignore lint:
export const useUserList = ({}: Props) => {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return (await rpcClient.users.$get({ query: {} })).json();
    },
  });

  return { users };
};
