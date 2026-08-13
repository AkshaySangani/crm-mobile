import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageKeys = {
  authStorage: "authStorage",
};


/**
 * Get data from AsyncStorage
 */
export async function getStorageData<T = any>(
  key: string
): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting storage data:", error);
    return null;
  }
}

/**
 * Save data to AsyncStorage
 */
export async function setStorageData(
  key: string,
  value: any
): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting storage data:", error);
  }
}

/**
 * Remove data from AsyncStorage
 */
export async function removeStorageData(
  key: string
): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing storage data:", error);
  }
}

/**
 * Clear all AsyncStorage
 */
export async function clearStorage(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
}