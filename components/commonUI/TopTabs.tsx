import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import colors from '@tokens/Colors'
import { getHeight, getWidth } from 'libs/StyleHelper'
import TextView from '@components/commonUI/TextView'
import fontSizes from '@tokens/FontSizes'

export interface TopTabsProps {
    tabs: string[]
    activeTab: string
    onSelectTab: (tab: string) => void
}

const TopTabs: React.FC<TopTabsProps> = ({ tabs, activeTab, onSelectTab }) => {
    return (
        <View style={styles.container}>
            {tabs.map(tab => {
                const isActive = activeTab === tab
                return (
                    <Pressable key={tab} onPress={() => onSelectTab(tab)}>
                        <TextView
                            style={isActive ? styles.tabTextActive : styles.tabTextInactive}
                            text={tab}
                        />
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: getWidth(20),
    },
    tabTextActive: {
        fontSize: getHeight(fontSizes.buttonXLarge),
        fontWeight: '800',
        color: colors.activeTabGreen,
    },
    tabTextInactive: {
        fontSize: getHeight(fontSizes.buttonXLarge),
        fontWeight: '200',
        color: colors.inactiveTabGray,
    },
})

export default TopTabs
