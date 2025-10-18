import React from 'react'
import img1 from '../assets/chevron-left.svg'
import img2 from '../assets/chevron-right.svg'

function Footer() {
  return (
    <div className='container mx-auto max-w-[1232px] flex items-center h-full text-white'>
      <div className='w-[320px] h-8 flex items-center justify-center mt-[-20px] mb-[40px] mx-auto'>
        <ul className='flex gap-4 items-center'>
          <li className='cursor-pointer'>
            <img src={img1} alt="" />
          </li>
          <li className='w-8 h-8 bg-[#F5F5F5] active:text-white text-[#515151] text-4 cursor-pointer rounded-md flex items-center justify-center active:bg-[#109BE9]'>1</li>
          <li className='w-8 h-8 bg-[#F5F5F5] active:text-white text-[#515151] text-4 cursor-pointer rounded-md flex items-center justify-center active:bg-[#109BE9]'>2</li>
          <li className='w-8 h-8 bg-[#F5F5F5] active:text-white text-[#515151] text-4 cursor-pointer rounded-md flex items-center justify-center active:bg-[#109BE9]'>3</li>
          <li className='w-8 h-8 bg-[#F5F5F5] active:text-white text-[#515151] text-4 cursor-pointer rounded-md flex items-center justify-center active:bg-[#109BE9]'>4</li>
          <li className='w-8 h-8 bg-[#F5F5F5] active:text-white text-[#515151] text-4 cursor-pointer rounded-md flex items-center justify-center active:bg-[#109BE9]'>5</li>
          <li className='cursor-pointer'>
            <img src={img2} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
