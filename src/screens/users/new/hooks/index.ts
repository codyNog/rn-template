import { router } from "expo-router";
import { useCreateUser } from "shared/libs/convex/hooks";
import { useCallback } from "react";
import type { UserFormValues } from "@/components/UserForm/types";

export const useUsersNewScreen = () => {
  const createUser = useCreateUser();

  const action = useCallback(
    async (values: UserFormValues) => {
      await createUser(values);
      router.push("/users");
    },
    [createUser],
  );

  return { action };
};
