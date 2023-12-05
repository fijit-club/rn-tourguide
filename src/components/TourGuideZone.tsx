import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { BorderRadiusObject, Shape } from '../types'
import { Step } from './Step'
import { Wrapper } from './Wrapper'

export type ArrowPositions =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'right'

export interface TourGuideZoneProps {
  zone: number
  tourKey?: string
  isTourGuide?: boolean
  text?: string
  shape?: Shape
  maskOffset?: number
  borderRadius?: number
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  keepTooltipPosition?: boolean
  tooltipBottomOffset?: number
  borderRadiusObject?: BorderRadiusObject
  name?: string
  tooltipArrowPosition?: ArrowPositions
  onZonePress?: () => void
}

export const TourGuideZone = ({
  isTourGuide = true,
  tourKey = '_default',
  zone,
  children,
  shape,
  text,
  maskOffset,
  borderRadius,
  style,
  keepTooltipPosition,
  tooltipBottomOffset,
  borderRadiusObject,
  name,
  tooltipArrowPosition = 'topLeft',
  onZonePress,
}: TourGuideZoneProps) => {
  if (!isTourGuide) {
    return <>{children}</>
  }

  return (
    <Step
      text={text ?? `Zone ${zone}`}
      order={zone}
      name={name ?? `${zone}`}
      {...{
        tourKey,
        shape,
        maskOffset,
        borderRadius,
        keepTooltipPosition,
        tooltipBottomOffset,
        borderRadiusObject,
        tooltipArrowPosition,
        onZonePress,
      }}
    >
      <Wrapper {...{ style }}>{children}</Wrapper>
    </Step>
  )
}
