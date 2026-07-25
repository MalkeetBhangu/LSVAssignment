import React, { useMemo } from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TextStyle, ViewStyle, StyleProp, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '@tokens/Colors'
import gradients from '@tokens/Gradients'
import fontSizes from '@tokens/FontSizes'
import radius from '@tokens/Radius'
import { getHeight } from 'libs/StyleHelper'

// Currently using 'primary' variant. Additional variants (e.g. 'secondary', 'outline') can be added here in the future.
type ButtonVariant = 'primary'

// Currently using standard size. Additional sizes (e.g. 'S', 'L') can be added here in the future.
type ButtonSize = 'M'

export interface ButtonProps extends Omit<PressableProps, 'style'> {
    title: string
    isDisabled?: boolean
    variant?: ButtonVariant
    size?: ButtonSize
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

/**
 * Dynamic style generator for Button.
 * Switch statements currently handle default size ('M') and variant ('primary') and can be expanded in the future.
 */
const getButtonStyles = ({ size = 'M', variant = 'primary', isDisabled = false, }: { size?: ButtonSize, variant?: ButtonVariant, isDisabled?: boolean }) => {
    const { buttonHeight, buttonFontSize } = (() => {
        switch (size) {
            case 'M':
            default:
                return { buttonHeight: getHeight(50), buttonFontSize: getHeight(fontSizes.buttonMedium) }
        }
    })()

    const buttonBackgroundColor = () => {
        if (isDisabled) return colors.inputBackground
        switch (variant) {
            case 'primary':
            default:
                return colors.primaryGreen
        }
    }

    const buttonTextColor = () => {
        if (isDisabled) return colors.textMuted
        switch (variant) {
            case 'primary':
            default:
                return colors.white
        }
    }

    const buttonBorderColor = () => {
        if (isDisabled) return colors.inputBorder
        switch (variant) {
            case 'primary':
            default:
                return 'transparent'
        }
    }

    const containerStyle: ViewStyle = { height: buttonHeight, backgroundColor: buttonBackgroundColor(), borderColor: buttonBorderColor(), borderWidth: 0, }
    const textStyle: TextStyle = { color: buttonTextColor(), fontSize: buttonFontSize, }

    return { containerStyle, textStyle }
}

export default function Button({ title, isDisabled = false, variant = 'primary', size, style, textStyle, ...props }: ButtonProps) {
    const buttonStyles = useMemo(() => getButtonStyles({ size, variant, isDisabled }), [size, variant, isDisabled])
    return (
        <Pressable
            {...props}
            disabled={isDisabled}
            style={({ pressed }) => [styles.container, buttonStyles.containerStyle, isDisabled && styles.disabled, pressed && styles.pressed, style,]}
            accessibilityRole="button"
        >
            {!isDisabled ? (
                <LinearGradient
                    colors={gradients.PRIMARY_BUTTON}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={[styles.text, buttonStyles.textStyle, textStyle]}>{title}</Text>
                </LinearGradient>
            ) : (
                <Text style={[styles.text, buttonStyles.textStyle, textStyle]}>{title}</Text>
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
    text: {
        fontWeight: '400',
        textAlign: 'center',
    },
    disabled: {
        opacity: 0.6,
    },
    pressed: {
        opacity: 0.85,
    },
})
