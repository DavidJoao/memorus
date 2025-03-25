import React from 'react'
import ToggleTheme from "@/components/general/ToggleTheme"

const Navbar = () => {
  return (
    <div className='h-[3rem] fixed w-full flex items-center p-2 bg-stone-100 dark:bg-black shadow-xl'>
      <ToggleTheme/>
    </div>
  )
}

export default Navbar