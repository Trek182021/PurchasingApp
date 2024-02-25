import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav'

const V1Layout = () => {
  return (
    <div className="w-full md:flex">
        <SideNav />
        
        <section className="flex flex-1 h-full">
          <div className="flex flex-1 p-10 overflow-y-scroll">
            <Outlet />
          </div>
        </section>
    </div>
  )
}

export default V1Layout