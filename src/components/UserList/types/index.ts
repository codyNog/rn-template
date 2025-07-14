import type { User } from "shared/convex/schema";

// UserListコンポーネントのProps型
export type Props = {
  // Convexから取得したユーザーリストの型を正しく定義
  users?: User;
  onUserSelect?: (userId: string) => void;
  isLoading?: boolean;
};
