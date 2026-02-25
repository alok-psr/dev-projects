import { useState } from "react";


function BmForm() {

    const [bmURL, setBmURL] = useState('');
    const [bmList, setBmList] = useState(['hello','guys']);
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("clicked ;;;; ", e)
      console.log(bmURL);
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
        <div>
          <h1>hello</h1>
          {bmList.forEach((e,i) => {
            <li className="px-4 py-2 bg-slate-600 text-lg text-slate-100 rounded-md text-center my-2 w-min-80" key={i}>{e}</li>
          })}
        </div>
      </>
    )
}


export default BmForm;