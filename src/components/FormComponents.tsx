import React, { type FC } from 'react'
import { Control } from 'react-hook-form'

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

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

// type CustomFormSelectProps = {
//   name: string
//   control: Control<any>
//   items: string[]
//   labelText?: string
// }

// https://ui.shadcn.com/docs/components/select
// export function CustomFormSelect({
//   name,
//   control,
//   items,
//   labelText,
// }: CustomFormSelectProps) {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => {
//         return (
//           <FormItem>
//             <FormLabel className='capitalize'>{labelText || name}</FormLabel>
//             <Select
//               onValueChange={field.onChange}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 {items.map((item) => {
//                   return (
//                     <SelectItem
//                       key={item}
//                       value={item}
//                     >
//                       {item}
//                     </SelectItem>
//                   )
//                 })}
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )
//       }}
//     />
//   )
// }

const FormComponents: FC = () => {
  return (
    <div>
      <h1>FormComponents</h1>
    </div>
  )
}
export default FormComponents
