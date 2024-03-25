'use client'
import { useRouter } from 'next/navigation'

import React, { type FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ArticleStatus,
  createAndEditArticleSchema,
  type CreateAndEditArticleType,
} from '@/utils/types'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'

import { CustomFormField, CustomFormSelect } from './FormComponents'

import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import { getSingleArticleAction, updateArticleAction } from '@/utils/actions'

const f = '⇒ EditArticleForm.tsx (EditArticleForm):'

type EditArticleFormProps = {
  articleSlug: string
}
const EditArticleForm: FC<EditArticleFormProps> = ({ articleSlug }) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['article', articleSlug],
    queryFn: () => getSingleArticleAction(articleSlug),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditArticleType) =>
      updateArticleAction(articleSlug, values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          title: 'Error!',
          description: 'there was an error while updating an article.',
          variant: 'error',
        })
        return
      }
      toast({
        title: 'Success!',
        description: 'The article was successfully updated.',
        variant: 'success',
      })
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      queryClient.invalidateQueries({ queryKey: ['article', articleSlug] })

      router.push('/dashboard/articles')
      // form.reset();
    },
  })

  // 1. Define your form.
  const form = useForm<CreateAndEditArticleType>({
    resolver: zodResolver(createAndEditArticleSchema),
    defaultValues: {
      title: data?.title || '',
      articleSlug: data?.articleSlug || '',
      articleStatus:
        (data?.articleStatus as ArticleStatus) || ArticleStatus.Draft,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: CreateAndEditArticleType) {
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
        <h2>edit article</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
          <CustomFormField
            name='title'
            labelText='Article Title'
            control={form.control}
          />
          <CustomFormField
            name='articleSlug'
            labelText='Slug (will be used as URL)'
            control={form.control}
          />
          <CustomFormSelect
            name='articleStatus'
            control={form.control}
            items={Object.values(ArticleStatus)}
            labelText='Status'
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
export default EditArticleForm
