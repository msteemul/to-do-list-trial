import { useState } from 'react'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center bg-red-400 w-full h-[747px]'>
     <Todo />
     </div>
    </>
  )
}

export default App
