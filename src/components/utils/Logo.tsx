import Link from 'next/link'
import React, { type FC } from 'react'

const f = '⇒ Logo.tsx (Logo):'

const Logo: FC = () => {
  return (
    <figure>
      <Link href='/'>
        <figcaption className='text-xl xl:text-4xl mb-6 font-ffh'>
          Guide Prague
        </figcaption>
      </Link>
    </figure>
  )
}
export default Logo
