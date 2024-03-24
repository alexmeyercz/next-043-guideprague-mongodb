'use client'

import React, { type FC } from 'react'

// zod and react-hook-form
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  createAndEditCategorySchema,
  type CreateAndEditCategoryType,
} from '@/utils/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  CustomFormField,
  CustomFormSimpleSwitch,
  CustomFormSwitch,
} from './FormComponents'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCategoryAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const f = '⇒ CreateCategoryForm.tsx (CreateCategoryForm):'

const CreateCategoryForm: FC = () => {
  // 1. Define your form.
  const form = useForm<CreateAndEditCategoryType>({
    resolver: zodResolver(createAndEditCategorySchema),
    // values must match createAndEditCategorySchema in types.ts
    defaultValues: {
      name: '',
      categoryStatus: true,
    },
  })

  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditCategoryType) =>
      // to simulate error replace `createCategoryAction(values)` with Promise.resolve(null)
      createCategoryAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          title: 'Error!',
          description: 'there was an error while creating a category.',
          variant: 'destructive',
        })
        return
      }
      toast({
        title: 'Success!',
        description: 'The category was successfully created.',
        variant: 'success',
      })
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      queryClient.invalidateQueries({ queryKey: ['categories'] })

      router.push('/dashboard/categories')
      // form.reset();
    },
  })

  function onSubmit(values: CreateAndEditCategoryType) {
    console.log(f, 'values →', values)
    mutate(values)
  }

  // 2. Define submit handler
  // -- do something with form values
  // -- this will be type-safe and validated
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-muted p-8 rounded'
      >
        <h2>Add Category</h2>
        <div className='grid gap-4 md:grid-cols-2 items-start'>
          <CustomFormField
            name='name'
            control={form.control}
          />
          <CustomFormSwitch
            name='categoryStatus'
            control={form.control}
            labelText='Category status'
            descriptionText='Is this category active?'
          />

          <Button
            type='submit'
            className='self-end'
            disabled={isPending}
          >
            {isPending ? 'Loading...' : 'Create Category'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default CreateCategoryForm
