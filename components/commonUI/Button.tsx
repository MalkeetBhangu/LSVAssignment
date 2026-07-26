import React, { useMemo } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TextStyle, ViewStyle, StyleProp, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '@tokens/Colors'
import gradients from '@tokens/Gradients'
import fontSizes from '@tokens/FontSizes'
import radius from '@tokens/Radius'
import { getHeight, getWidth } from '@libs/StyleHelper'

type ButtonVariant = 'primary' | 'social'
type ButtonSize = 'M'

export interface ButtonProps extends Omit<PressableProps, 'style'> {
    title: string
    isDisabled?: boolean
    variant?: ButtonVariant
    size?: ButtonSize
    leftIcon?: React.ReactNode
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

/**
 * Dynamic style generator for Button.
 */
const getButtonStyles = ({ size = 'M', variant = 'primary', isDisabled = false }: { size?: ButtonSize; variant?: ButtonVariant; isDisabled?: boolean }) => {
    const { buttonHeight, buttonFontSize } = (() => {
        switch (size) {
            case 'M':
            default:
                return { buttonHeight: getHeight(55), buttonFontSize: getHeight(fontSizes.buttonMedium) }
        }
    })()

    const buttonBackgroundColor = () => {
        if (isDisabled) return colors.inputBackground
        switch (variant) {
            case 'social':
                return colors.white
            case 'primary':
            default:
                return colors.primaryGreen
        }
    }

    const buttonTextColor = () => {
        if (isDisabled) return colors.textMuted
        switch (variant) {
            case 'social':
                return colors.textPrimary
            case 'primary':
            default:
                return colors.white
        }
    }

    const buttonBorderColor = () => {
        if (isDisabled) return colors.inputBorder
        switch (variant) {
            case 'social':
            case 'primary':
            default:
                return 'transparent'
        }
    }

    const containerStyle: ViewStyle = {
        height: buttonHeight,
        backgroundColor: buttonBackgroundColor(),
        borderColor: buttonBorderColor(),
        borderWidth: 0,
    }

    const textStyle: TextStyle = {
        color: buttonTextColor(),
        fontSize: buttonFontSize,
        fontWeight: variant === 'social' ? '600' : '400',
    }

    return { containerStyle, textStyle }
}

export default function Button({ title, isDisabled = false, variant = 'primary', size, leftIcon, style, textStyle, ...props }: ButtonProps) {
    const buttonStyles = useMemo(() => getButtonStyles({ size, variant, isDisabled }), [size, variant, isDisabled])

    const renderContent = () => (
        <View style={styles.contentRow}>
            {leftIcon}
            <Text style={[styles.text, buttonStyles.textStyle, leftIcon ? styles.textWithIcon : undefined, textStyle]}>{title}</Text>
        </View>
    )

    return (
        <Pressable
            {...props}
            disabled={isDisabled}
            style={({ pressed }) => [styles.container, buttonStyles.containerStyle, isDisabled && styles.disabled, pressed && styles.pressed, style]}
            accessibilityRole="button"
        >
            {!isDisabled && variant === 'primary' ? (
                <LinearGradient
                    colors={gradients.PRIMARY_BUTTON}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    {renderContent()}
                </LinearGradient>
            ) : (
                renderContent()
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.button,
        overflow: 'hidden',
    },
    gradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.button,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    textWithIcon: {
        marginLeft: getWidth(10),
    },
    disabled: {
        opacity: 0.6,
    },
    pressed: {
        opacity: 0.85,
    },
})
