import Link from 'next/link'
import React, { type FC } from 'react'

const f = '⇒ Logo.tsx (Logo):'

const Logo: FC = () => {
  return (
    <figure>
      <Link href='/'>
        <figcaption className='text-4xl mb-6'>Guide Prague</figcaption>
      </Link>
    </figure>
  )
}
export default Logo
