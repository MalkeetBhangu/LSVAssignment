import { Platform } from "react-native"

export const DEFAULT_LANGUAGE_CODE = 'en'
export const isDeviceTranslucent = Platform.OS === 'android' && Platform.Version >= 35

