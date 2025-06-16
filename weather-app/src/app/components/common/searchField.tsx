import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";


export default function SearchField() {
    return (
        <div className='flex items-center justify-between px-4 py-3 rounded-2xl bg-[#39454f]'>
            <div className='flex gap-3 w-4/5'>
                <p className='text-gray-400 text-2xl'><IoIosSearch /></p>
                <input
                    type="text"
                    className='text-[18px] text-gray-400 outline-0 w-full'
                    placeholder='Search for city or zip code' />
            </div>
            <button className='text-gray-400 text-2xl'><MdOutlineKeyboardVoice /></button>
        </div>
    )
}
