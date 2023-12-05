import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, Shape } from '../types';
export declare type ArrowPositions = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'right';
export interface TourGuideZoneProps {
    zone: number;
    tourKey?: string;
    isTourGuide?: boolean;
    text?: string;
    shape?: Shape;
    maskOffset?: number;
    borderRadius?: number;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    borderRadiusObject?: BorderRadiusObject;
    name?: string;
    tooltipArrowPosition?: ArrowPositions;
    onZonePress?: () => void;
}
export declare const TourGuideZone: ({ isTourGuide, tourKey, zone, children, shape, text, maskOffset, borderRadius, style, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, name, tooltipArrowPosition, onZonePress, }: TourGuideZoneProps) => JSX.Element;
