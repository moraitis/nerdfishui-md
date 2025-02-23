'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@moraitis/utils'
import {Slot} from '@radix-ui/react-slot'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md border text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-popover-inverse text-inverse active-ring border-transparent hover:bg-gray-700 disabled:!bg-gray-700 dark:border-gray-900 dark:hover:bg-gray-200 dark:disabled:!bg-gray-300',
        nerdfish:
          'bg-nerdfish hover:from-nerdfish active-ring hover:to-nerdfish-100 set-colors-accent-nerdfish disabled:bg-nerdfish-100 disabled:!border-nerdfish dark:disabled:!border-nerdfish-500 border-transparent text-white hover:bg-gradient-to-r dark:bg-opacity-50',
        danger:
          'bg-danger disabled:!border-danger dark:disabled:!border-danger hover:bg-danger-900 active-ring set-colors-accent-danger disabled:bg-danger-100 border-transparent text-white disabled:text-black',
        success:
          'bg-success disabled:bg-success-100 disabled:!border-success dark:disabled:!border-success hover:bg-success-900 active-ring set-colors-accent-success border-transparent text-white disabled:text-black',
        outline:
          'border-input text-primary bg-primary active-ring hover:text-primary disabled:!border-gray dark:disabled:!border-gray hover:bg-gray-100 dark:hover:bg-gray-800 dark:disabled:!border-gray-200',
        secondary:
          'bg-secondary border-secondary text-primary active-ring hover:bg-gray-200 disabled:bg-gray-100 dark:!bg-gray-900 dark:hover:bg-gray-700 disabled:dark:bg-gray-900',
        ghost:
          'hover:text-primary border-transparent hover:bg-gray-100 disabled:opacity-70 dark:hover:bg-gray-800 dark:hover:text-white',
        link: 'text-primary border-none bg-transparent underline-offset-4 hover:underline disabled:opacity-70',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-6 rounded-md px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-md px-10',
        icon: 'flex h-10 w-10 items-center justify-center rounded-md',
        iconSm: 'flex h-8 w-8 items-center justify-center rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function getButtonClassName({
  variant = 'default',
  size = 'default',
  accentuate,
  className,
}: VariantProps<typeof buttonVariants> & {
  className?: string
  accentuate?: boolean
}) {
  return cx(
    buttonVariants({variant, size, className}),
    accentuate &&
      'select-none rounded-full shadow-[0px_16px_6px_-16px_#ff4,4px_2px_4px_-2px_#f4f,-4px_2px_4px_-2px_#4f4] hover:shadow-[0px_16px_6px_-12px_#ff4,4px_6px_6px_-2px_#f4f,-4px_6px_6px_-2px_#4f4] active:translate-y-0 active:shadow-[0px_10px_3px_-16px_#ff4,8px_0px_2px_-2px_#f4f,-8px_0px_2px_-2px_#4f4]',
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  accentuate?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, asChild, size, className, accentuate, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={getButtonClassName({
          variant,
          size,
          accentuate,
          className,
        })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(function ButtonGroup({className, ...props}, ref) {
  return (
    <div
      ref={ref}
      className={cx(
        'flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4',
        className,
      )}
      {...props}
    />
  )
})
ButtonGroup.displayName = 'ButtonGroup'

export {Button, ButtonGroup, getButtonClassName, buttonVariants}
