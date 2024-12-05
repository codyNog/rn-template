import type { UserFormValues } from "@/components/UserForm/types";
import { router } from "expo-router";
import { useCallback } from "react";
import { rpcClient } from "shared/rpc";

export const useUsersNewScreen = () => {
  const action = useCallback(async (values: UserFormValues) => {
    await rpcClient.users.$post({ json: values });
    router.push("/users");
  }, []);

  return { action };
};
