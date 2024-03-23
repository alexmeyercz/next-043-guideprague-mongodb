import React, { type FC } from 'react'
import image403 from '/public/403.jpg'
import Image from 'next/image'

const f = '⇒ NoAccess.tsx (NoAccess):'

/**
 * Renders a component indicating no access.
 */
const NoAccess: FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h1> We feel a disturbance in the Force</h1>
      <Image
        src={image403}
        alt='403'
        width={300}
        height={300}
        placeholder='blur'
        blurDataURL={image403.blurDataURL}
        className='rounded-full shadow-xl'
      />
      <h4>Your midi-chlorian level is too low. </h4>
      <p>Please contact your jedi master.</p>
    </div>
  )
}
export default NoAccess
