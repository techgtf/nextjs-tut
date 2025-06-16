import React from 'react'
import SearchField from './searchField'
import HeaderComp from './headerComp'

export default function Header() {
    return (
        <div className='header'>
            <div className='p-4'>
                <SearchField />
                {/* <HeaderComp /> */}
            </div>
        </div>
    )
}