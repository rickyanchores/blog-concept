import React from 'react'

const Nav = () => {
  return (
    <div className='Nav p-4 flex justify-around items-center'>
        <div className="logo">
            Blog 101
        </div>
        <div className="navLinks flex justify-around items-center list-none gap-4">
            <li className="link">Home</li>
            <li className="link">About</li>
            <li className="link">Contact</li>
        </div>
    </div>
  )
}

export default Nav;