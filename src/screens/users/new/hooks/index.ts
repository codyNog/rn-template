import { router } from "expo-router";
import { useCallback } from "react";
import { useCreateUser } from "shared/libs/convex";
import type { UserFormValues } from "src/components/UserForm/types";

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
