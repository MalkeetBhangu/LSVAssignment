import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '@tokens/Colors'
import { getHeight, getWidth } from '@libs/StyleHelper'
import TextView from './TextView'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'



const ComingSoon: React.FC = () => {
    const t = getTexts(DEFAULT_LANGUAGE_CODE)

    return (
        <View style={styles.container}>
            <TextView text={t.common.comingSoon} style={styles.title} />
            <TextView text={t.common.comingSoonSubtitle} style={styles.subtitle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: getWidth(32),
        backgroundColor: colors.white,
    },
    title: {
        fontSize: getHeight(22),
        fontWeight: '800',
        color: colors.primaryGreen,
        marginBottom: getHeight(8),
        textAlign: 'center',
    },
    subtitle: {
        fontSize: getHeight(14),
        fontWeight: '500',
        color: colors.textSecondary,
        textAlign: 'center',
    },
})

export default ComingSoon
