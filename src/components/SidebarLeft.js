import React from 'react'
import logo from '../assets/SidebarLeft-Logo.png'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const SidebarLeft = () => {
  return (
    <div className='sidebarLeft'>
      <div className='sidebarLeft-Logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='sidebarLeft-Menu'>
        {sidebarMenu.map((item, key) => (
          <NavLink to={item.path} key={item.path}>
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
export default SidebarLeft
