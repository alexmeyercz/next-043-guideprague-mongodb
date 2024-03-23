import React, { type FC } from 'react'
import { Control } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'

import { Switch } from '@/components/ui/switch'

import { Label } from '@/components/ui/label'

import { Input } from '@/components/ui/input'

const f = '⇒ FormComponents.tsx (FormComponents):'

type CustomFormFieldProps = {
  name: string
  control: Control<any>
}

// https://ui.shadcn.com/docs/components/input
export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type CustomFormSelectProps = {
  name: string
  control: Control<any>
  items: string[]
  labelText?: string
}

//ui.shadcn.com/docs/components/select
export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className='capitalize'>{labelText || name}</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item) => {
                  return (
                    <SelectItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

type CustomFormSwitchProps = {
  name: string
  control: Control<any>
  labelText?: string
  descriptionText?: string
}

export function CustomFormSwitch({
  name,
  control,
  labelText,
  descriptionText,
}: CustomFormSwitchProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
          <div className='space-y-0.5'>
            <FormLabel className='text-base'>{labelText || name}</FormLabel>
            {descriptionText ? (
              <FormDescription>{descriptionText}</FormDescription>
            ) : (
              ''
            )}
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
export type CustomFormSimpleSwitchProps = {
  name: string
  labelText?: string
}

export function CustomFormSimpleSwitch({
  name,
  labelText,
}: CustomFormSimpleSwitchProps) {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id={name} />
      <Label htmlFor={name}>{labelText || name}</Label>
    </div>
  )
}
