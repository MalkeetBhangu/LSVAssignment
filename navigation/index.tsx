import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "@constants/Screens"
import Login from "@components/login"
import colors from "@tokens/Colors"
import { enableFreeze } from "react-native-screens"

const { LOGIN } = Screens
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
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={LOGIN} component={Login} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
