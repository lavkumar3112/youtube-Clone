import React, { useEffect, useState } from 'react'
import Logo from '../images/hamburgur-menu.png'
import YoutubeLogo from '../images/yotube-logo.jpg'
import UserIcon from "../images/user-icon.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {

    const [searchQuery,setSearchQuery]=useState("");

    const [suggestions,setSuggestion]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(false);

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch();
    

    useEffect(()=>{
        // Api call

        //make an api call after eery key press
        //but if the diff b/w 2 api calls is <200ms
        //decline the API call

        const timer = setTimeout(()=> {
            if(searchCache[searchQuery]){
            setSuggestion(searchCache[searchQuery]); 
            }else{
            getSearchSuggestion()
            }
        },200);

        return () =>{
            clearTimeout(timer);
        } 
    },[searchQuery]);


    const getSearchSuggestion = async () =>{
        //console.log("API Call " +searchQuery);
        const data =await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        setSuggestion(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        })
        );
    }

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
            <div>
            <input className='w-1/2 border border-gray-400 px-5 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}/>
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>🔍</button>
            </div>
            {showSuggestion && (
            <div className='absolute bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {suggestions.map((suggestionItems)=> <li key={suggestionItems} className='py-2 px-3 shadow-sm hover:bg-gray-100 rounded-lg'>🔍 {suggestionItems}</li>)}
                    
                </ul>
            </div>)}
        </div>
        <div className='col-span-1'>
            <img className='h-8' src={UserIcon} alt='user-icon'/>
        </div>
    </div>
  )
}

export default Head