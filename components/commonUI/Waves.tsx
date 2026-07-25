import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { getHeight } from 'libs/StyleHelper'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

interface WavesProps {
    children?: React.ReactNode
    height?: number
}

const Waves: React.FC<WavesProps> = ({ children, height = getHeight(330) }) => {
    const SVG_HEIGHT = 160

    return (
        <View style={[styles.container, { height }]}>
            <View style={StyleSheet.absoluteFill}>
                <Svg
                    width={SCREEN_WIDTH}
                    height={height}
                    viewBox={`0 0 375 ${SVG_HEIGHT}`}
                    preserveAspectRatio="none"
                >
                    <Defs>
                        {/* Back Dark Green Wave Gradient */}
                        <LinearGradient id="backWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#3cc634ff" />
                            <Stop offset="50%" stopColor="#A4F400" />
                            <Stop offset="100%" stopColor="#3cc634ff" />
                        </LinearGradient>

                        {/* Front Lime-to-Green Wave Gradient */}
                        <LinearGradient id="frontWaveGrad" x1="30%" y1="0%" x2="100%" y2="85%">
                            <Stop offset="0%" stopColor="#68cf46ff" />
                            <Stop offset="38%" stopColor="#8bc80fff" />
                            <Stop offset="100%" stopColor="#cbf400ff" />
                        </LinearGradient>
                    </Defs>

                    {/* 1. Back Dark Green Wave (Continuous layer peaking on left, center valley, and right) */}
                    <Path
                        d="M 0,20 C 25,12 55,10 60,10 C 125,10 145,20 210,30 C 240,30 255,6 350,6 C 350,6 500,12 375,16 L 375,160 L 0,160 Z"
                        fill="url(#backWaveGrad)"
                    />

                    {/* 2. Front Lime Green Wave (Shallower middle dip y=37) */}
                    <Path
                        d="M 0,35 C 80,50 160,37 165,37 C 220,30 220,20 300,20 C 340,20 360,24 375,26 L 375,160 L 0,160 Z"
                        fill="url(#frontWaveGrad)"
                    />
                </Svg>
            </View>

            {children && (
                <View style={styles.contentContainer}>
                    {children}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    contentContainer: {
        flex: 1,
        paddingTop: getHeight(65),
    },
})

export default Waves
