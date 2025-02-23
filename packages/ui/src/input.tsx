'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@moraitis/utils'
import {AlertCircle} from 'lucide-react'

const toggleVariants = cva(
  'text-md focus-ring group w-full rounded-lg font-bold placeholder:text-gray-500 disabled:text-gray-200',
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-8 py-5 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

type InputSize = VariantProps<typeof toggleVariants>['size']

type RawInputProps = {
  hasError?: boolean
  icon?: React.ElementType
  inputSize?: InputSize
  action?: () => void
} & (
  | ({type: 'textarea'} & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']
)

type InputProps = {
  defaultValue?: string | null
  name: string
  label?: string
  className?: string
  error?: string | null
  description?: React.ReactNode
}

function getInputClassName(
  className?: string,
  hasError?: boolean,
  inputSize: InputSize = 'md',
) {
  return cx(
    toggleVariants({size: inputSize}),
    hasError
      ? 'border border-red-100 bg-red-50 dark:border-red-200 dark:border-red-200/20 dark:bg-red-500/10'
      : 'bg-black/5 dark:bg-white/10 text-primary',

    className,
  )
}

function FormHelperText({className, ...props}: JSX.IntrinsicElements['div']) {
  return (
    <div className={cx('text-sm text-primary-400', className)} {...props} />
  )
}

function Label({className, htmlFor, ...props}: JSX.IntrinsicElements['label']) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx('block text-sm font-medium text-secondary', className)}
      {...props}
    />
  )
}

const RawInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  RawInputProps
>(function RawInput(props, ref) {
  const {
    type,
    hasError,
    children,
    inputSize,
    icon: Icon,
    ...rawInputProps
  } = props

  const className = getInputClassName(props.className, hasError, inputSize)

  if (type === 'textarea') {
    return (
      <div className="relative flex w-full items-center space-x-2">
        {Icon ? (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'absolute top-0 right-5 z-10 flex h-full items-center justify-center p-0',
              hasError && 'text-red-500',
            )}
          />
        ) : null}
        <textarea
          {...(rawInputProps as JSX.IntrinsicElements['textarea'])}
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          aria-invalid={hasError}
          className={cx('h-36', className, {'pr-14': !!Icon})}
        />
        {children ? <div className="flex shrink-0">{children}</div> : null}
      </div>
    )
  }

  return (
    <div className="flex flex-nowrap items-center space-x-2">
      <div className="relative w-full shadow-sm">
        <input
          type={type}
          {...(rawInputProps as JSX.IntrinsicElements['input'])}
          className={cx(className, {'pr-14': !!Icon})}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
        {Icon && !hasError ? (
          <Icon
            width="20px"
            height="20px"
            className="text-gray-300' absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0"
          />
        ) : null}
        {hasError ? (
          <div className="absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0">
            <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      {children ? <div className="flex shrink-0">{children}</div> : null}
    </div>
  )
})

function InputError({
  className,
  id,
  ...props
}: JSX.IntrinsicElements['p'] & {id?: string}) {
  if (!props.children) {
    return null
  }

  return (
    <p
      {...props}
      className={cx('mb-0 text-sm text-left text-red-600', className)}
      role="alert"
      id={id}
    />
  )
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps & RawInputProps
>(function Input(
  {defaultValue, error, name, label, className, description, id, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className="w-full">
      {label ? (
        <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
          <Label htmlFor={inputId} className="mb-2">
            {label}
          </Label>
          {description ? (
            <span className="text-sm text-gray-200" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      ) : null}

      <RawInput
        hasError={!!error}
        {...(props as RawInputProps)}
        ref={ref}
        name={name}
        id={inputId}
        autoComplete={name}
        required
        defaultValue={defaultValue}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
      />

      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})

export {RawInput, Input, InputError, getInputClassName, FormHelperText, Label}
export type {RawInputProps, InputProps, InputSize}
