import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [active, setActive] = useState(true)

  return (
    <div className='flex'>
        <Sidebar opened={active}/>
        <div>
            <button onClick={() => setActive(state => !state)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout