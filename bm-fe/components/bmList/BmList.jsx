import { useEffect, useState } from "react";
import { read, remove } from "../../data/urlData";
import BmListElement from "./BmListElement";


function BmList(){
    const [bmData,setBmData] = useState([]);

    function onDelEle(ind){
        setBmData(prev=>(
            prev.filter((val,i)=>i!==ind)
        ))
        remove(ind)
    }
    useEffect(()=>{
        const data = read();
        setBmData(Object.values(data)); // convert obj of obj to array of obj[values:: {key,value}]
        console.log("data from bmlist --- ",Object.values(data))
        // console.log(Obje.key,)
    },[localStorage.getItem('bookmarks')])
    return (
        <>
            <div className="bg-slate-400 mx-10 rounded-md p-4 mt-5 flex flex-col">
                <h1 className="text-2xl  text-sky-100 text-center">Your BookMarks</h1>
                <ul className="...">
                    {bmData.map((e, i) => (
                        <li className="my-2 " key={e.key}><BmListElement data={e.value} ikey={e.key} onDel={onDelEle}/></li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default BmList