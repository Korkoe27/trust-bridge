import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-12 z-20 w-full flex justify-between items-center'>
      <div className="flex justify-between backdrop-blur-md  items-center mx-auto lg:max-w-[1200px] w-11/12 lg:w-10/12 max-w-[396px]">
        
        <div className="lg:max-w-[195px] lg:max-h-[70px] w-full max-w-[120px] max-h-[42px] h-full">
          <img src="/images/Logo.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center justify-between max-w-60 w-full">
          <Link href={'/'} className="font-[PlusJakartaSans] font-medium text-base text-[#FEFEFE]">Login</Link>
          <Link href={'/'} className='border-white/50 border rounded-[10px] p-4'>Join Community</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
