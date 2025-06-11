// Convex関連の共通型定義

import type { FunctionArgs, FunctionReturnType } from "convex/server";
import type { api } from "../../convex/convex/_generated/api";
import type { Doc, Id } from "../../convex/convex/_generated/dataModel";

// =============================================================================
// ユーザー関連の型
// =============================================================================

// ユーザードキュメントの型
export type User = Doc<"users">;

// ユーザーIDの型
export type UserId = Id<"users">;

// ユーザー作成時の引数型
export type CreateUserArgs = FunctionArgs<typeof api.users.createUser>;

// ユーザー更新時の引数型
export type UpdateUserArgs = FunctionArgs<typeof api.users.updateUser>;

// ユーザーリスト取得の戻り値型
export type UsersListType = FunctionReturnType<typeof api.users.getUsers>;

// ユーザー取得の戻り値型
export type UserByIdType = FunctionReturnType<typeof api.users.getUserById>;

// =============================================================================
// フォーム関連の型
// =============================================================================

// ユーザー作成フォームの型（システムフィールドを除外）
export type UserFormData = Omit<
  User,
  "_id" | "_creationTime" | "createdAt" | "updatedAt"
>;

// ユーザー更新フォームの型
export type UserUpdateFormData = Partial<UserFormData> & {
  id: UserId;
};

// =============================================================================
// UI状態関連の型
// =============================================================================

// ローディング状態を含むユーザーリスト
export type UsersWithLoadingState = {
  users: UsersListType;
  isLoading: boolean;
  error?: string;
};

// 選択状態を含むユーザー
export type SelectableUser = User & {
  isSelected?: boolean;
};

// =============================================================================
// 汎用型ユーティリティ
// =============================================================================

// Convex関数の戻り値型を取得するヘルパー
export type ConvexReturnType<T extends keyof typeof api> = {
  [K in keyof (typeof api)[T]]: FunctionReturnType<(typeof api)[T][K]>;
};

// Convex関数の引数型を取得するヘルパー
export type ConvexArgsType<T extends keyof typeof api> = {
  [K in keyof (typeof api)[T]]: FunctionArgs<(typeof api)[T][K]>;
};
