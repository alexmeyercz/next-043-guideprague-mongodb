'use client'

import React, { type FC } from 'react'

// zod and react-hook-form
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  // ArticleStatus,
  createAndEditArticleSchema,
  type CreateAndEditArticleType,
} from '@/utils/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CustomFormField } from './FormComponents'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createArticleAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const f = '⇒ CreateArticleForm.tsx:'

const CreateArticleForm: FC = () => {
  // 1. Define your form.
  const form = useForm<CreateAndEditArticleType>({
    resolver: zodResolver(createAndEditArticleSchema),
    // values must match createAndEditArticleSchema in types.ts
    defaultValues: {
      title: '',
    },
  })

  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditArticleType) =>
      createArticleAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: 'there was an error',
        })
        return
      }
      toast({ description: 'article created' })
      queryClient.invalidateQueries({ queryKey: ['articles'] })

      router.push('/dashboard/articles')
      // form.reset();
    },
  })

  function onSubmit(values: CreateAndEditArticleType) {
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
        <h2>Add Article</h2>
        <div className='grid gap-4 md:grid-cols-2 items-start'>
          <CustomFormField
            name='title'
            control={form.control}
          />

          <Button
            type='submit'
            className='self-end'
            disabled={isPending}
          >
            {isPending ? 'Loading...' : 'Create Article'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default CreateArticleForm
