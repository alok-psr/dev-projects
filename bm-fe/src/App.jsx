import { useState } from 'react'
import BmForm from '../components/bmForm/BmForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 w-lvw h-lvh'>
      <BmForm />
    </div>
  )
}

export default App
