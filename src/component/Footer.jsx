import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-2 p-6 bg-[var(--bg-color)]  uppercase'> 
        <h1 className=''> <span className='font-bold'>Tameer</span> / Frond End Developer </h1>
        <ul className='grid grid-cols-4'>
            <a href=""><li>About <span className='font-bold'>Tameer</span></li></a>
            <a href=""><li>Resume</li></a>
            <a href=""><li>Creativity</li></a>
            <a href=""><li>Lets Chat</li></a>
        </ul>
    </div>
    )
}
