import AsyncStorage from "@react-native-async-storage/async-storage";

const get = async <T>(key: string): Promise<T> => {
  const data = await AsyncStorage.getItem(key);
  if (!data) {
    throw new Error(`No data found for key: ${key}`);
  }
  return JSON.parse(data) as T;
};

const set = async <T>(key: string, value: T): Promise<T> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
  const data = get<T>(key);
  if (!data) {
    throw new Error(`Failed to set data for key: ${key}`);
  }
  return data;
};

const remove = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key).catch(() => {
    throw new Error(`Failed to remove data for key: ${key}`);
  });
};

export const mobileStorage = {
  get,
  set,
  remove,
};
