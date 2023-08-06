import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'

const Public = () => {
  return (
    <div className='public'>
      <SidebarLeft />
      <Outlet />
      <SidebarRight />
    </div>
  )
}

export default Public
