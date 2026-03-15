import { useState,useEffect } from 'react'
import BmForm from '../components/bmForm/BmForm.jsx'
import BmList from '../components/bmList/BmList.jsx'

function App() {
  const [bmData,setBmData] = useState([])
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8080/api/BM');
      if (!response.ok) {
        throw new Error(`no response`);
      }
      const data = await response.json();
      console.log(data);
      setBmData(data)
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  } 
  useEffect( ()=>{
    console.log('useEffect')
    fetchData();

    console.log("data from bmlist --- ",bmData)

  },[localStorage.getItem('bookmarks')])
  return (
    <div className='bg-slate-900 min-w-[400px] h-screen'>
      <BmForm setBmData={setBmData} fetchData={fetchData} />
      <BmList bmData={bmData} setBmData={setBmData} fetchData={fetchData} />
    </div>
  )
}

export default App
