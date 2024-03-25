'use client'

import React, { type FC } from 'react'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  createAndEditCategorySchema,
  type CreateAndEditCategoryType,
} from '@/utils/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'

import { CustomFormField, CustomFormSwitch } from './FormComponents'

import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import { getSingleCategoryAction, updateCategoryAction } from '@/utils/actions'

const f = '⇒ EditCategoryForm.tsx (EditCategoryForm):'

type EditCategoryFormProps = {
  categoryId: string
}

const EditCategoryForm: FC<EditCategoryFormProps> = ({ categoryId }) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['category', categoryId],
    queryFn: () => getSingleCategoryAction(categoryId),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditCategoryType) =>
      updateCategoryAction(categoryId, values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          title: 'Error!',
          description: 'there was an error while updating an category.',
          variant: 'error',
        })
        return
      }
      toast({
        title: 'Success!',
        description: 'The category was successfully updated.',
        variant: 'success',
      })
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      queryClient.invalidateQueries({ queryKey: ['category', categoryId] })

      router.push('/dashboard/categories')
      // form.reset();
    },
  })

  // 1. Define your form.
  const form = useForm<CreateAndEditCategoryType>({
    resolver: zodResolver(createAndEditCategorySchema),
    defaultValues: {
      name: data?.name || '',
      categoryStatus: data?.categoryStatus || false,
    },
  })

  // 2. Define a submit handler.
  const onSubmit = (values: CreateAndEditCategoryType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-muted p-8 rounded'
      >
        <h2 className='mb-6 font-semibold text-4xl capitalize'>edit job</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-start gap-4'>
          <CustomFormField
            name='name'
            labelText='Category Name'
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
            {isPending ? 'Loading...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default EditCategoryForm
