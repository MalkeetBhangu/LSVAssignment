import React, { useState } from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '@tokens/Colors'
import gradients from '@tokens/Gradients'
import styles from './styles'
import { BellIcon, BagIcon } from '@components/commonUI/HeaderIcons'
import TopTabs from '@components/commonUI/TopTabs'
import CountryFilterList from './CountryFilterList'
import StreamList from './StreamList'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'

const Home: React.FC = () => {
    const t = getTexts(DEFAULT_LANGUAGE_CODE)
    const tabsList = [t.home.stream, t.home.hot, t.home.follow]
    const [activeTab, setActiveTab] = useState<string>(tabsList[0])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.topBar}>
                    <View style={styles.logoWrapper}>
                        <Image source={require('@assets/images/logo.png')} style={styles.logoImage} />
                    </View>

                    <View style={styles.actionsRow}>
                        <Pressable style={styles.bellButton}>
                            <BellIcon size={22} color={colors.bellIconColor} />
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>3</Text>
                            </View>
                        </Pressable>

                        <Pressable style={styles.bagButton}>
                            <LinearGradient
                                colors={gradients.BAG_BUTTON}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.bagButtonGradient}
                            >
                                <BagIcon size={22} color={colors.white} />
                            </LinearGradient>
                        </Pressable>
                    </View>
                </View>

                <TopTabs tabs={tabsList} activeTab={activeTab} onSelectTab={setActiveTab} />
            </View>
            <CountryFilterList />
            <StreamList />
        </View>
    )
}

export default Home