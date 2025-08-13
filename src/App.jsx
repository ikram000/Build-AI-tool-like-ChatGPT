import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='grid grid-cols-5 h-screen text-center'>
    <div className='col-span-1 bg-zinc-800 '>

    </div>
<div className='col-span-4 p-10'>
<div className='container h-110'>

</div>
<div className='bg-zinc-800 w-1/2 text-white m-auto p-1 pr-5 rounded-4xl border border-zinc-700 flex h-16'>
  <input type="text" className='w-full h-full p-3 outline-none' placeholder='Ask me Anything' />
  <button>ASK Anything</button>
</div>
</div>
   </div>
  )
}

export default App
