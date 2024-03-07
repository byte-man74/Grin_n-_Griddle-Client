import React from 'react'
import Logo from '../assets/images/dark.svg'


export const NavigationBar = () => {
  return (
    <div className='max-w-[3000px] w-[90%] h-[5rem] bg-black rounded-lg flex justify-between items-center px-[100px] py-1'>
      <div className='w-1/3 max-w-[400px] bg-blue-600 h-1/2'></div>
      <div className='h-full w-[100px] bg-transparent flex items-center justify-center'>
        <img src={Logo} alt="" />
      </div>
      <div className='w-1/3 max-w-[400px] bg-blue-600 h-1/2'></div>
    </div>
  )
}
