import React, { useCallback } from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "@constants/Screens"
import Login from "@components/login"
import TabNavigator from "./TabNavigator"
import colors from "@tokens/Colors"
import { enableFreeze } from "react-native-screens"
import SplashScreen from "react-native-splash-screen"
import { useUserState } from "@store/UseUserStore"

const { LOGIN, MAIN_TABS } = Screens
enableFreeze(true)


const MainStack = createNativeStackNavigator<any>()

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
}

const Navigation: React.FC = () => {
    const { userData } = useUserState(['isLoggedIn'])
    const handleNavigationReady = useCallback(() => {
        SplashScreen.hide()
    }, [])

    return (
        <NavigationContainer theme={navigationTheme} onReady={handleNavigationReady}>
            <MainStack.Navigator initialRouteName={userData.isLoggedIn ? MAIN_TABS : LOGIN} screenOptions={{ headerShown: false, navigationBarHidden: true }}>
                <MainStack.Screen name={LOGIN} component={Login} />
                <MainStack.Screen name={MAIN_TABS} component={TabNavigator} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
