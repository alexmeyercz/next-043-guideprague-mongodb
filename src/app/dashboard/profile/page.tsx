import { UserProfile } from '@clerk/nextjs'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (ProfilePage):'

const ProfilePage: FC = () => {
  return (
    <div>
      <h1>Profile</h1>
      <UserProfile />
    </div>
  )
}
export default ProfilePage
