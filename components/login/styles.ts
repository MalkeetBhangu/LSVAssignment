import { StyleSheet } from 'react-native'
import colors from '@tokens/Colors'
import fontSizes from '@tokens/FontSizes'
import radius from '@tokens/Radius'
import spacing from '@tokens/Spacing'
import { getHeight, getWidth } from 'libs/StyleHelper'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageWrapper: {
        marginBottom: getHeight(spacing.spaceXxl),
        borderRadius: radius.large,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: getHeight(12),
        },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 0,
        boxShadow: '0px 12px 10px -8px rgba(0, 0, 0, 0.14)',
    },
    imageStyle: {
        width: getHeight(82),
        height: getHeight(82),
    },
    topSection: {
        paddingTop: getHeight(spacing.spaceXl),
        alignItems: 'center',
    },
    welcomeTitle: {
        fontSize: getHeight(fontSizes.headingLarge),
        fontWeight: '700',
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: getHeight(spacing.marginSmall),
    },
    welcomeSubtitle: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        fontWeight: '200',
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: getHeight(spacing.componentGroupDistance),
    },
    middleSection: {
        paddingHorizontal: spacing.sideMarginMedium,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: getHeight(-8),
        marginBottom: getHeight(spacing.componentGroupDistance),
    },
    forgotPasswordText: {
        fontSize: fontSizes.bodyTextMedium,
        color: colors.forgotPasswordText,
        fontWeight: '200',
        textDecorationLine: 'underline',
    },
})

export default styles
