import { useState } from "react";
import { writeNew } from "../../data/urlData";

// current err :: when refresh uni index becomes 0 hence starts to overite bms from starting .. next .. the new bm list after adding dosed change unless refreshed resetting the uniindex to 0
// the new list not refresing cuz the add button is in form but list is inside bmlist .. and the list updates when data is changed in the bmList .. so figure out how to trigger change in bmlist from add button here

function BmForm() {
    const [uniKey,setUniKey] = useState(0); // to maintain a universal key for every new bm
    const [bmURL, setBmURL] = useState(''); // entered url
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("clicked ;;;; ", e)
      console.log(bmURL);
      try {
        writeNew(uniKey,bmURL)
        setUniKey(prev=>prev+1);
        console.log("entered successfully --", uniKey)
      } catch (error) {
        console.log('err occoured :: ',error)
      }

    }



    return (
      <>
        <form action="" onSubmit={handleSubmit} className="bg-slate-700 p-10 flex flex-col justify-center mx-20 rounded-2xl h-fit content-center">
          <h1 className="text-3xl text-emerald-100 mb-5 underline underline-offset-3 text-center ">Form</h1>
          <input 
            type="text" 
            value={bmURL} 
            className="text-sky-100 w-min-80 text-lg px-2 py-1 placeholder:text-slate-300 rounded-lg ring-1 ring-slate-300 outline-none" 
            name="url"
            placeholder="https://okalok.space" 
            onChange={(e)=>{
            setBmURL(e.target.value)
          }}
          />
          <button className="text-slate-100 hover:bg-emerald-600 transition-all duration-200 bg-emerald-700 rounded-md w-fit px-4 py-2 mx-auto mt-5 " type="submit">add</button>
        </form>
        
      </>
    )
}


export default BmForm;