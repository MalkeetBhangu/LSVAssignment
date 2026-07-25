import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface IconProps {
    color?: string
    size?: number
}

export const HomeIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 3C7.8 3 4.5 6.3 4.5 10.8V18.5C4.5 19.9 5.6 21 7 21H17C18.4 21 19.5 19.9 19.5 18.5V10.8C19.5 6.3 16.2 3 12 3Z"
            fill={color}
        />
    </Svg>
)

export const PartyIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M4.5 21L12.2 9.8L14.8 12.4L4.5 21Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.5 15.2C9.5 14.2 11.2 14.2 12.2 15"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <Circle cx="15.5" cy="5.5" r="1.2" fill={color} />
        <Circle cx="19.5" cy="9.5" r="1.5" fill={color} />
        <Circle cx="20.5" cy="4.5" r="1" fill={color} />
        <Path
            d="M13.5 8.5C15.5 7 17.5 7.5 18.5 6.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
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
            d="M21.5 3.5L2 11.5L10 14.5L18.5 6.5L10.5 15L10 21L14 16.5L19.5 19L21.5 3.5Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export const ProfileIcon: React.FC<IconProps> = ({ color = '#FFFFFF', size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle
            cx="12"
            cy="8"
            r="4.2"
            stroke={color}
            strokeWidth="1.8"
        />
        <Path
            d="M4.5 20C4.5 16.1 7.9 13 12 13C16.1 13 19.5 16.1 19.5 20"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </Svg>
)
