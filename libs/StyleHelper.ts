import { isDeviceTranslucent } from '@constants/Constants'
import { Dimensions, Platform, StatusBar } from 'react-native'
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context'

const getStatusBarHeight = () => {
    const bottomInset = initialWindowSafeAreaInsets?.bottom ?? 0
    return Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + bottomInset || 0 : 0
}

const getWindowSize = () => {
    const { width, height } = Dimensions.get('window')
    return { windowWidth: width, windowHeight: isDeviceTranslucent ? height - getStatusBarHeight() : height }
}
export const getFigmaBase = () => {
    return { width: 376, height: 812 }
}
export const getWidth = (figmaWidth: number) => {
    const { windowWidth } = getWindowSize()
    return (windowWidth / getFigmaBase().width) * figmaWidth
}
export const getHeight = (figmaHeight: number) => {
    const { windowHeight } = getWindowSize()
    return (windowHeight / getFigmaBase().height) * figmaHeight
}
export const scale = (size: number) => {
    const { windowWidth } = getWindowSize()
    return (windowWidth / getFigmaBase().width) * size
}
export const verticalScale = (size: number) => {
    const { windowHeight } = getWindowSize()
    return (windowHeight / getFigmaBase().height) * size
}
export const moderateScale = (size: number, factor: number = 0.5) => {
    const avgScale = (scale(size) + verticalScale(size)) / 2
    return size + (avgScale - size) * factor
}
