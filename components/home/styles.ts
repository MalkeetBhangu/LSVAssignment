import { StyleSheet, Platform, StatusBar } from 'react-native'
import colors from '@tokens/Colors'
import { getHeight, getWidth } from '@libs/StyleHelper'
import radius from '@tokens/Radius'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: getHeight(8),
    },
    headerContainer: {
        paddingHorizontal: getWidth(16),
        paddingBottom: getHeight(4),
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: getHeight(18),
    },
    logoWrapper: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        borderRadius: radius.large,
        elevation: 4,
        boxShadow: '0px 2px 10px -8px rgba(0, 0, 0, 0.14)',

    },
    logoImage: {
        width: getHeight(44),
        height: getHeight(44),
        borderRadius: getHeight(14),
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: getWidth(12),
    },
    bellButton: {
        width: getHeight(44),
        height: getHeight(44),
        borderRadius: getHeight(22),
        backgroundColor: colors.bellButtonBg,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',

    },
    badge: {
        position: 'absolute',
        top: getHeight(4),
        right: getWidth(4),
        width: getHeight(18),
        height: getHeight(18),
        borderRadius: getHeight(9),
        backgroundColor: colors.badgeRed,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
    },
    badgeText: {
        fontSize: getHeight(9),
        fontWeight: '700',
        color: colors.white,
    },
    bagButton: {
        width: getHeight(44),
        height: getHeight(44),
        borderRadius: getHeight(22),
        shadowColor: colors.limeGreenShadow,
        shadowOffset: { width: getWidth(-3), height: getHeight(3) },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
        boxShadow: '-3px 3px 8px rgba(219, 227, 0, 0.35)',
    },
    bagButtonGradient: {
        width: '100%',
        height: '100%',
        borderRadius: getHeight(22),
        justifyContent: 'center',
        alignItems: 'center',
    },
    subHeaderTabs: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: getWidth(20),
    },
    tabTextActive: {
        fontSize: getHeight(20),
        fontWeight: '800',
        color: colors.activeTabGreen,
    },
    tabTextInactive: {
        fontSize: getHeight(20),
        fontWeight: '500',
        color: colors.inactiveTabGray,
    },
})

export default styles
