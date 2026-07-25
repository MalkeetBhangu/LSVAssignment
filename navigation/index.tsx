import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "@constants/Screens"
import Login from "@components/login"
import TabNavigator from "./TabNavigator"
import colors from "@tokens/Colors"
import { enableFreeze } from "react-native-screens"

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
    return (
        <NavigationContainer theme={navigationTheme}>
            <MainStack.Navigator screenOptions={{ headerShown: false, navigationBarHidden: true }}>
                <MainStack.Screen name={LOGIN} component={Login} />
                <MainStack.Screen name={MAIN_TABS} component={TabNavigator} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
