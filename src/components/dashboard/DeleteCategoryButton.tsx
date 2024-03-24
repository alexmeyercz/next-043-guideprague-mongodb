import React, { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCategoryAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'
import InfoWithText from './IconWithText'
import { DeleteIcon } from 'lucide-react'

const f = '⇒ DeleteCategoryButton.tsx (DeleteCategoryButton):'
type DeleteCategoryButtonProps = {
  id: string
}
const DeleteCategoryButton: FC<DeleteCategoryButtonProps> = ({ id }) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteCategoryAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          title: 'Error!',
          description: 'Failed to delete category',
          variant: 'error',
        })
        return
      }
      // The `invalidateQueries` function is part of the `React Query` library, which is commonly used for managing server state and caching in React applications.
      // When you call `invalidateQueries`, you are essentially telling `React Query` to mark certain queries as `stale`. `Stale` queries are queries that have fetched data from the server previously, but that data may no longer be up to date. By marking a query as `stale`, `React Query` knows that it needs to refetch the data the next time it is requested.
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast({
        title: 'Success!',
        description: 'The category was successfully deleted.',
        variant: 'success',
      })
    },
  })
  return (
    <Button
      size='sm'
      disabled={isPending}
      onClick={() => {
        mutate(id)
      }}
    >
      <InfoWithText
        icon={<DeleteIcon />}
        text='Delete Article'
      />
    </Button>
  )
}
export default DeleteCategoryButton
