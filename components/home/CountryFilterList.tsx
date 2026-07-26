import React, { useState, useCallback } from 'react'
import { View, StyleSheet, FlatList, Pressable, Text, ListRenderItem } from 'react-native'
import colors from '@tokens/Colors'
import { getHeight, getWidth } from '@libs/StyleHelper'
import TextView from '@components/commonUI/TextView'
import { useGetCountries, DEFAULT_COUNTRIES } from '@apis/useGetCountries'
import fontSizes from '@tokens/FontSizes'

export interface CountryItem {
    id: string
    name: string
    flag: string
}

export interface CountryFilterListProps {
    countries?: CountryItem[]
    selectedId?: string
    onSelectCountry?: (country: CountryItem) => void
}

const CountryFilterList: React.FC<CountryFilterListProps> = ({ countries: propCountries, selectedId = 'global', onSelectCountry, }) => {
    const { data: apiCountries } = useGetCountries()
    const countries = propCountries || apiCountries || DEFAULT_COUNTRIES
    const [activeId, setActiveId] = useState(selectedId)

    const handlePress = useCallback((country: CountryItem) => {
        setActiveId(country.id)
        if (onSelectCountry) onSelectCountry(country)
    }, [onSelectCountry])

    const keyExtractor = useCallback((item: CountryItem) => item.id, [])

    const renderItem: ListRenderItem<CountryItem> = useCallback(({ item }) => {
        const isActive = activeId === item.id
        return (
            <Pressable
                onPress={() => handlePress(item)}
                style={[
                    styles.pill,
                    isActive ? styles.pillActive : styles.pillInactive,
                ]}
            >
                <TextView style={styles.flagEmoji}>{item.flag}</TextView>
                <TextView text={item.name} style={isActive ? styles.textActive : styles.textInactive} />
            </Pressable>
        )
    }, [activeId, handlePress])

    return (
        <View style={styles.wrapper}>
            <FlatList
                horizontal
                data={countries}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                initialNumToRender={8}
                maxToRenderPerBatch={10}
                windowSize={5}
                removeClippedSubviews={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: getHeight(12),
        marginBottom: getHeight(8),
    },
    scrollContent: {
        paddingHorizontal: getWidth(16),
        alignItems: 'center',
    },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        height: getHeight(30),
        paddingHorizontal: getWidth(10),
        borderRadius: getHeight(18),
        marginRight: getWidth(5),
    },
    pillActive: {
        backgroundColor: colors.activePillBg,
        borderWidth: 1.5,
        borderColor: colors.activePillBorder,
    },
    pillInactive: {
        backgroundColor: colors.inactivePillBg,
        borderWidth: 1,
        borderColor: colors.inactivePillBorder,
    },
    iconWrapper: {
        marginRight: getWidth(6),
    },
    flagEmoji: {
        fontSize: getHeight(10),
        marginRight: getWidth(5),
    },
    textActive: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        fontWeight: '500',
        color: colors.textPrimary,
    },
    textInactive: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        fontWeight: '300',
        color: colors.inactivePillText,
    },
})

export default CountryFilterList
