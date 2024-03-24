import React, { type FC } from 'react'

const f = '⇒ IconWithText.tsx (IconWithText):'
type IconWithTextProps = {
  icon: React.ReactNode
  text: string
}
const IconWithText: FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <span className='flex gap-x-2 items-center'>
      {icon} {text}
    </span>
  )
}
export default IconWithText
