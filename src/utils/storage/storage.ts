import { StorageKey } from './types';

const get = <T>(key: StorageKey): T | null => {
  const value = window.localStorage.getItem(key);

  if (value === null) {
    return value;
  }

  try {
    return JSON.parse(value) as T;
  } catch (e) {
    return null;
  }
};

const set = (key: StorageKey, item: unknown) =>
  window.localStorage.setItem(key, JSON.stringify(item));

const remove = (key: StorageKey) => window.localStorage.removeItem(key);

const storage = { get, remove, set };

export default storage;
