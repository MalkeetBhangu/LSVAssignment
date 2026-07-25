import React from 'react'
import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TABS } from '@constants/Screens'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'
import colors from '@tokens/Colors'
import { getHeight } from 'libs/StyleHelper'
import Home from '@components/home'
import Party from '@components/party'
import GoLive from '@components/goLive'
import Chats from '@components/chats'
import Profile from '@components/profile'
import { HomeIcon, PartyIcon, GoLiveIcon, ChatsIcon, ProfileIcon } from '@components/commonUI/TabIcons'

const Tab = createBottomTabNavigator()

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const t = getTexts(DEFAULT_LANGUAGE_CODE)

    const tabConfig = [
        { name: TABS.HOME_TAB, label: t.tabs.home, icon: HomeIcon },
        { name: TABS.PARTY_TAB, label: t.tabs.party, icon: PartyIcon },
        { name: TABS.GO_LIVE_TAB, label: t.tabs.goLive, icon: GoLiveIcon, isCenter: true },
        { name: TABS.CHATS_TAB, label: t.tabs.chats, icon: ChatsIcon },
        { name: TABS.PROFILE_TAB, label: t.tabs.profile, icon: ProfileIcon },
    ]

    const TAB_BAR_HEIGHT = getHeight(80)

    return (
        <View style={[styles.tabBarWrapper, { height: TAB_BAR_HEIGHT }]}>
            <View style={StyleSheet.absoluteFill}>
                <Svg width={SCREEN_WIDTH} height={TAB_BAR_HEIGHT} viewBox="0 0 375 90" preserveAspectRatio="none">
                    <Defs>
                        <LinearGradient id="tabGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="0%" stopColor="#D4F800" />
                            <Stop offset="28%" stopColor="#9EE800" />
                            <Stop offset="65%" stopColor="#45C000" />
                            <Stop offset="100%" stopColor="#009F32" />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d="M 0,0 L 144,0 C 158,0 164,24 187.5,24 C 211,24 217,0 231,0 L 375,0 L 375,90 L 0,90 Z"
                        fill="url(#tabGrad)"
                    />
                </Svg>
            </View>

            <Pressable
                style={styles.centerButton}
                onPress={() => {
                    const centerRouteIndex = state.routes.findIndex(r => r.name === TABS.GO_LIVE_TAB)
                    if (centerRouteIndex !== -1) {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: state.routes[centerRouteIndex].key,
                            canPreventDefault: true,
                        })
                        if (!event.defaultPrevented) {
                            navigation.navigate(state.routes[centerRouteIndex].name)
                        }
                    }
                }}
            >
                <View style={styles.centerButtonInner}>
                    <GoLiveIcon size={26} color="#00A335" />
                </View>
            </Pressable>

            <View style={styles.tabRow}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index
                    const config = tabConfig.find(item => item.name === route.name) || tabConfig[index]
                    const IconComponent = config.icon

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }

                    if (config.isCenter) {
                        return (
                            <View key={route.key} style={styles.tabItem}>
                                <View style={styles.centerSpace} />
                                <Text style={[styles.tabLabel, isFocused ? styles.tabLabelActive : styles.tabLabelInactive]}>
                                    {config.label}
                                </Text>
                            </View>
                        )
                    }

                    return (
                        <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
                            <IconComponent
                                size={22}
                                color={isFocused ? colors.tabIconActive : colors.tabIconInactive}
                            />
                            <Text style={[styles.tabLabel, isFocused ? styles.tabLabelActive : styles.tabLabelInactive]}>
                                {config.label}
                            </Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }} >
            <Tab.Screen name={TABS.HOME_TAB} component={Home} />
            <Tab.Screen name={TABS.PARTY_TAB} component={Party} />
            <Tab.Screen name={TABS.GO_LIVE_TAB} component={GoLive} />
            <Tab.Screen name={TABS.CHATS_TAB} component={Chats} />
            <Tab.Screen name={TABS.PROFILE_TAB} component={Profile} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    tabBarWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
    },
    centerButton: {
        position: 'absolute',
        top: getHeight(-37),
        alignSelf: 'center',
        zIndex: 10,
    },
    centerButtonInner: {
        width: getHeight(54),
        height: getHeight(54),
        borderRadius: getHeight(27),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
    },
    centerSpace: {
        height: getHeight(10),
    },
    tabRow: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: getHeight(14),
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: getHeight(11),
        marginTop: getHeight(4),
    },
    tabLabelActive: {
        color: colors.white,
        fontWeight: '400',
    },
    tabLabelInactive: {
        color: colors.tabIconInactive,
        fontWeight: '200',
    },
})

export default TabNavigator
