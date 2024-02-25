import React from 'react'
import UserIcon from "../images/user-icon.png"

const Comment = ({data}) => {

    const {name,text,replies} = data;

  return (
    <div className='flex bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' src={UserIcon} alt='userIcon'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment