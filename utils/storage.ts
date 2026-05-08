import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/contexts/UserContext';

const USER_STORAGE_KEY = '@craft_connect_user';

export const getStoredUser = async (): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading user from storage:', error);
    return null;
  }
};

export const storeUser = async (user: User): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(USER_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

export const removeUser = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {
    console.error('Error removing user from storage:', error);
  }
};