import { useState } from 'react'
import {Todo} from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-gray-900 w-full h-[100vh]'>
     <Todo />
     </div>
    </>
  )
}

export default App
