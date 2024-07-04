import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'


function App() {
  const [active, setActive] = useState(true)

  return (
    <div className='flex bg-[#D9D9D9]'>
    <Sidebar opened={active} />
    <div>
      <button className=' ' onClick={() => setActive(state => !state)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
    </div>
    <div className='w-screen'>
      {/* <img className='p-10 w-full h-3/6 ' src="https://cdn.idntimes.com/content-images/community/2019/06/razer-blade-stealth-open-100763052-large-cc6ea3af72b05909709ce04df09aad4f_600x400.jpg" alt="" /> */}
    </div>
    </div>



    
  )
}

export default App
