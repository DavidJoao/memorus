import SigninForm from '@/components/auth/SigninForm'
import React from 'react'
import Link from 'next/link'
import Memorus from '@/components/general/Memorus'

const page = () => {
  return (
    <div className='pt-[5rem] w-full h-screen flex flex-col items-center'>
      <Memorus />
      <SigninForm />
      <Link href="/signup" className='text-xs dark:text-neutral-300'>Don't have an account? Sign up</Link>
    </div>
  )
}

export default page