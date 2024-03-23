import Link from 'next/link'
import React, { type FC } from 'react'

const f = '⇒ Logo.tsx (Logo):'

const Logo: FC = () => {
  return (
    <figure>
      <Link href='/'>
        <figcaption>Guide Prague</figcaption>
      </Link>
    </figure>
  )
}
export default Logo
