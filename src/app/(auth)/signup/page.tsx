import SignupForm from '@/app/components/auth/SignupForm'
import Memorus from '@/app/components/general/Memorus'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[5rem] w-full h-screen flex flex-col items-center'>
      <Memorus />
      <SignupForm />  
    </div>
  )
}

export default page