import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className='flex'>
    <Sidebar opened={active} />
    <div>
      <button onClick={() => setActive(state => !state)}>
        Open
      </button>
    </div>
    </div>
  )
}

export default App
