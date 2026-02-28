import { useState,useEffect } from 'react'
import BmForm from '../components/bmForm/BmForm.jsx'
import BmList from '../components/bmList/BmList.jsx'
import { read } from '../data/urlData.js'

function App() {
  const [bmData,setBmData] = useState([])

  useEffect(()=>{
    const data = read();
    setBmData(Object.values(data)); // convert obj of obj to array of obj[values:: {key,value}]
    console.log("data from bmlist --- ",Object.values(data))
    // console.log(Obje.key,)
  },[localStorage.getItem('bookmarks')])
  return (
    <div className='bg-slate-900 min-w-[400px] h-screen'>
      <BmForm setBmData={setBmData} />
      <BmList bmData={bmData} setBmData={setBmData} />
    </div>
  )
}

export default App
