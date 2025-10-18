import React from 'react'
import logo from '../assets/react.svg'
import logo2 from '../../public/vite.svg'

function Header() {
  return (
    <div className='w-full h-[72px] bg-gradient-to-r from-indigo-600 to-blue-500'>
      <div className='container mx-auto max-w-[1232px] flex items-center h-full text-white justify-around'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt=""  className='cursor-pointer'/>
          <h1 className='cursor-copy tracking-[0.5%] leading-[120%] font-bold text-2xl'><span className='text-amber-200'>Nur</span>.Market</h1>
          <img src={logo2} alt=""  className='cursor-pointer'/>
        </div>
        <ul className='flex gap-[37px] '>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Home</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Business</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Entertainment</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>General</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Health</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Science</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Sports</li>
          <li className='text-4 tracking-[0.5%] leading-[120%] font-normal hover:text-amber-300 cursor-pointer'>Technology</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
