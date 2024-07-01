import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [active, setActive] = useState(true)

  return (
    <div className='flex'>
    <Sidebar opened={active} />
    <div>
      <button className='bg-red-500' onClick={() => setActive(state => !state)}>
        Open navbar
      </button>
    </div>
    </div>
  )
}

export default App
