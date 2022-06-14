import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='nav-span trans'>Transportation</span>
      <span className="right">
        <span className='nav-span'>Home</span>
        <span className='nav-span'>About us </span>
        <span className='nav-span'>services</span>
        <span>Contact</span>
        <span className='nav-span'><select name="services">
          <option>EN</option>
          <option>AR</option>
          
          </select></span>
      </span>

      </div>
  )
}

export default Navbar