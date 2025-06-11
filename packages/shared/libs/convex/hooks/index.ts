import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { UserId } from "../../../convex/schema";

export const useUsers = () => {
  return useQuery(api.users.getUsers);
};

export const useUser = (id: string) => {
  return useQuery(api.users.getUserById, { id: id as UserId });
};

export const useCreateUser = () => {
  return useMutation(api.users.createUser);
};

export const useUpdateUser = () => {
  return useMutation(api.users.updateUser);
};

export const useDeleteUser = () => {
  return useMutation(api.users.deleteUser);
};
