"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

const storage =
  process.env.PLATFORM === "mobile"
    ? (await import("../../mobile/storage")).mobileStorage
    : (await import("../../browser/storage")).browserStorage;

export const useBrowserStorage = <T>(key: string, fallbackData: T) => {
  const get = useSuspenseQuery({
    queryKey: [key],
    queryFn: () => storage.get<T>(key).catch(() => fallbackData),
  });

  const set = async <T>(value: T) => {
    await storage.set<T>(key, value);
    get.refetch();
  };

  const remove = async () => {
    await storage.remove(key);
  };

  return {
    get,
    set,
    remove,
  };
};
