import React from 'react'
import Logo from '../images/hamburgur-menu.png'
import YoutubeLogo from '../images/yotube-logo.jpg'
import UserIcon from "../images/user-icon.png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {

    const dispatch=useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=> toggleMenuHandler()} className='h-8 cursor-pointer' src={Logo} alt='menu'/>
            <a href='/'><img className='h-16 mx-2 -mt-4 ' src={YoutubeLogo} alt='youtube-logo'/></a>
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' src={UserIcon} alt='user-icon'/>
        </div>
    </div>
  )
}

export default Head