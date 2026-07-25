import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface IconProps {
    color?: string
    size?: number
}

export const HomeIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            fill={color}
        />
    </Svg>
)

export const PartyIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M4.5 19.5l15-15M7 17l2 2M10 14l2 2M13 11l2 2M5 8l-2 2 4 4 2-2M14 3l-1.5 4.5L17 12l4.5-1.5L14 3z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Circle cx="18" cy="5" r="1" fill={color} />
        <Circle cx="13" cy="7" r="1" fill={color} />
        <Circle cx="20" cy="10" r="1" fill={color} />
    </Svg>
)

export const GoLiveIcon: React.FC<IconProps> = ({ color = '#00A638', size = 26 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="4" fill={color} />
        <Path
            d="M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
)

export const ChatsIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
            fill={color}
        />
    </Svg>
)

export const ProfileIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill={color}
        />
    </Svg>
)
