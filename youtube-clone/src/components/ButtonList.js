import React from 'react'
import Button from './Button'


const buttonList = ["All","Gaming","Songs","Cricket","Live","News","Cooking","Soccer","Entertainment","Motivation","Gadgets","Movies","Tech","Entertainment","Motivation","Gadgets","Movies","Tech"];

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll no-scrollbar'>
        {buttonList.map((button,index)=> (<Button key={index} name={button}></Button>))}
        
    </div>
  )
}

export default ButtonList