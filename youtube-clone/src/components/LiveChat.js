import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();

    const [liveMessage,setLiveMessage]=useState("");

    const chatMessage= useSelector((store) => store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            //Api Polling
            //console.log("Api Polling");
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: makeRandomMessage(15) + "🚀",
                }
            ))

        },1500);

        return () => clearInterval(i);
    },[]);

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        <div>{chatMessage.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)}</div>
        
    </div>
    <form className='w-full p-2 m-2 border border-black ' onSubmit={(e)=>{
            e.preventDefault();
            console.log(liveMessage);
            dispatch(addMessage({
                name:"Lav",
                message: liveMessage,
            }));
            setLiveMessage("");
    }}>
        <input className='px-2 w-56 border border-black' type='text' value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}/>
        <button className='px-1 mx-1 bg-green-300 rounded-sm'>Send</button>
    </form>
    </>
    
  )
}

export default LiveChat;