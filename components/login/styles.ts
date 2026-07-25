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
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
    },
    bottomSection: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    imageWrapper: {
        marginBottom: getHeight(spacing.sideMarginMedium),
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
        width: getHeight(64),
        height: getHeight(64),
    },
    topSection: {
        paddingTop: getHeight(spacing.componentGroupDistance),
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
        paddingHorizontal: spacing.spaceM,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: getHeight(4),
        marginBottom: getHeight(spacing.inputPaddingBig),
    },
    forgotPasswordText: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        color: colors.forgotPasswordText,
        fontWeight: '300',
        textDecorationLine: 'underline',
    },
    // Wave Section Elements
    waveContent: {
        paddingHorizontal: spacing.spaceM,
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: getHeight(35),
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getHeight(30)
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.dividerLine,
    },
    dividerText: {
        fontSize: getHeight(14),
        fontWeight: '200',
        color: colors.white,
        marginHorizontal: getWidth(10),
        paddingRight: getWidth(6),
        flexShrink: 0,
    },
    socialButtonsContainer: {
        marginBottom: getHeight(12),
    },
    socialButtonMargin: {
        marginBottom: getHeight(12),
    },
    socialButton: {
        width: '100%',
        height: getHeight(52),
        backgroundColor: colors.white,
        borderRadius: getHeight(26),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: getHeight(12),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    socialButtonText: {
        fontSize: getHeight(fontSizes.buttonMedium),
        fontWeight: '600',
        color: colors.textPrimary,
        marginLeft: getWidth(10),
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpPrompt: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        fontWeight: '200',
        color: colors.white,
    },
    signUpLink: {
        fontSize: getHeight(fontSizes.bodyTextMedium),
        fontWeight: '400',
        color: colors.white,
        textDecorationLine: 'underline',
    },
})

export default styles
