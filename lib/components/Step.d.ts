import * as React from 'react';
import { BorderRadiusObject, Shape } from '../types';
import { ArrowPositions } from './TourGuideZone';
interface Props {
    name: string;
    order: number;
    text: string;
    tourKey: string;
    shape?: Shape;
    active?: boolean;
    maskOffset?: number;
    borderRadius?: number;
    children: React.ReactNode;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    borderRadiusObject?: BorderRadiusObject;
    tooltipArrowPosition?: ArrowPositions;
    onZonePress?: () => void;
}
export declare const Step: (props: Props) => JSX.Element;
export {};
