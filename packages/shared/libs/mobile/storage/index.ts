import AsyncStorage from "@react-native-community/async-storage";
import Storage from "react-native-storage";

const storage: Storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

const get = async <T>(key: string): Promise<T> => {
  const data = await storage.load({
    key,
  });
  if (!data) {
    throw new Error(`No data found for key: ${key}`);
  }
  return data;
};

const set = async <T>(key: string, value: T): Promise<T> => {
  await storage.save({
    key,
    data: value,
  });
  const data = get<T>(key);
  if (!data) {
    throw new Error(`Failed to set data for key: ${key}`);
  }
  return data;
};

const remove = async (key: string): Promise<void> => {
  await storage
    .remove({
      key,
    })
    .catch(() => {
      throw new Error(`Failed to remove data for key: ${key}`);
    });
};

export const mobileStorage = {
  get,
  set,
  remove,
};
