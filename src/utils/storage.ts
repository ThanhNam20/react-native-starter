import AsyncStorage from '@react-native-async-storage/async-storage';

type StringValue = string | null;
type Key = 'access_token' | 'profile';

async function getValue(key: Key): Promise<StringValue> {
  try {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null
  } catch (error) {
    console.error(`Error getting value for key "${key}"`, error);
    return null;
  }
}

async function setValue(key: Key, value: StringValue): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value as string);
  } catch (error) {
    console.error(`Error setting value for key "${key}"`, error);
  }
}

async function removeValue(key: Key): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing value for key "${key}"`, error);

  }
}

export const asyncStorage = {
  getValue,
  setValue,
  removeValue
};
