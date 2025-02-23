'use client'

import * as React from 'react'
import {Slider} from '@moraitis/ui'
import {cx} from '@moraitis/utils'

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({className, ...props}: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cx('w-[60%]', className)}
      {...props}
    >
      <Slider.Thumb />
    </Slider>
  )
}
