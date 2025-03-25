import SignupForm from '@/components/auth/SignupForm'
import Memorus from '@/components/general/Memorus'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[5rem] w-full h-screen flex flex-col items-center'>
      <Memorus />
      <SignupForm />  
      <Link href="/signin" className='text-xs dark:text-neutral-300'>Already have an account? Sign in</Link>
    </div>
  )
}

export default page