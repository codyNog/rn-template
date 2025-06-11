import { useLocalSearchParams, useRouter } from "expo-router";
import type { UserId } from "packages/shared/convex/schema";
import { useCallback } from "react";
import { useUpdateUser, useUser } from "shared/libs/convex/hooks";
import type { UserFormValues } from "src/components/UserForm/types";

export const useUsersIdScreen = () => {
  const { id, edit } = useLocalSearchParams<{ id: string; edit?: string }>();
  const user = useUser(id as string);
  const updateUser = useUpdateUser();
  const router = useRouter();
  const isEditing = edit === "true";

  const action = useCallback(
    async (values: UserFormValues) => {
      console.log(values);
      if (values.id) {
        await updateUser({
          id: values.id as UserId,
          name: values.name,
          email: values.email,
        });
        router.push("/users");
      }
    },
    [updateUser, router],
  );

  return {
    user,
    isLoading: user === undefined,
    isEditing,
    action,
  };
};
