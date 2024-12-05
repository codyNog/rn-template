import type { UserFormValues } from "@/components/UserForm/types";
import { rpcClient } from "@/rpc";
import { useCallback } from "react";

export const useUsersNewScreen = () => {
  const action = useCallback(async (values: UserFormValues) => {
    await rpcClient.users.$post({ json: values });
  }, []);

  return { action };
};
