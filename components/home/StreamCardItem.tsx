import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '@tokens/Colors'
import gradients from '@tokens/Gradients'
import radius from '@tokens/Radius'
import { getHeight, getWidth } from '@libs/StyleHelper'
import TextView from '@components/commonUI/TextView'
import { EyeIcon } from '@components/commonUI/HeaderIcons'
import { getTexts } from '@translations/TranslationHelper'
import { DEFAULT_LANGUAGE_CODE } from '@constants/Constants'

import Button from '@components/commonUI/Button'

export interface StreamItem {
    id: string
    name: string
    avatar: string
    image: string
    viewers: string
    flag: string
}

export interface StreamCardItemProps {
    item: StreamItem
    onPressItem?: (item: StreamItem) => void
    onPressFollow?: (item: StreamItem) => void
}

const StreamCardItem: React.FC<StreamCardItemProps> = ({ item, onPressItem, onPressFollow, }) => {
    const t = getTexts(DEFAULT_LANGUAGE_CODE)

    return (
        <Pressable style={styles.cardContainer} onPress={() => onPressItem && onPressItem(item)}>
            <ImageBackground
                source={{ uri: item.image }}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
            >
                <LinearGradient
                    colors={gradients.CARD_OVERLAY}
                    style={styles.gradientOverlay}
                >
                    <View style={styles.viewerBadge}>
                        <EyeIcon size={12} color={colors.white} />
                        <TextView text={item.viewers} style={styles.viewerText} />
                    </View>

                    <View style={styles.bottomRow}>
                        <View style={styles.userInfoLeft}>
                            <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
                            <View style={styles.nameColumn}>
                                <TextView text={item.name} style={styles.userName} numberOfLines={1} />
                                <TextView text={item.flag} style={styles.flagEmoji} />
                            </View>
                        </View>
                        <Button title={t.home.followButton} variant="social" onPress={() => onPressFollow && onPressFollow(item)} style={styles.followButton} textStyle={styles.followText} />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: getWidth(6),
        height: getHeight(230),
        borderRadius: radius.large,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imageStyle: {
        borderRadius: radius.large,
    },
    gradientOverlay: {
        flex: 1,
        justifyContent: 'space-between',
        padding: getWidth(6),
    },
    viewerBadge: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.viewerBadgeBg,
        paddingHorizontal: getWidth(8),
        paddingVertical: getHeight(3),
        borderRadius: getHeight(12),
        gap: getWidth(5),
    },
    viewerText: {
        fontSize: getHeight(11),
        fontWeight: '200',
        color: colors.white,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: getWidth(6),
    },
    avatarImage: {
        width: getHeight(25),
        height: getHeight(25),
        borderRadius: getHeight(15),
        borderWidth: 1.5,
        borderColor: colors.white,
        marginRight: getWidth(6),
    },
    nameColumn: {
        flex: 1,
    },
    userName: {
        fontSize: getHeight(10),
        fontWeight: '500',
        color: colors.white,
    },
    flagEmoji: {
        fontSize: getHeight(10),
        marginTop: getHeight(1),
    },
    followButton: {
        backgroundColor: colors.followYellow,
        paddingHorizontal: getWidth(8),
        height: getHeight(20),
        borderRadius: getHeight(14),
        width: 'auto',
    },
    followText: {
        fontSize: getHeight(9),
        fontWeight: '400',
        color: colors.textPrimary,
    },
})

export default StreamCardItem
