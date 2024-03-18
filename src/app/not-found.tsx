import React, { type FC } from 'react'
import notFoundImage from '@/../public/404.png'
import Image from 'next/image'

const f = '⇒ not-found.tsx (NotFound):'

const NotFound: FC = () => {
  return (
    <article className='relative w-screen h-screen flex items-center justify-center'>
      <Image
        src={notFoundImage.src}
        alt='404'
        width={notFoundImage.width}
        height={notFoundImage.height}
        placeholder='blur'
        blurDataURL={notFoundImage.blurDataURL}
        className='absolute left-0 top-0 object-cover w-full h-full object-center'
      />
      <div className='absolute bg-black bg-opacity-75 left-0 right-0 top-0 bottom-0'></div>
      <h1 className='relative text-primary-foreground'>NotFound</h1>
    </article>
  )
}
export default NotFound
