import {  remove } from "../../data/urlData";
import BmListElement from "./BmListElement";

function BmList({bmData,setBmData}){

    function onDelEle(ind){
        setBmData(prev=>(
            prev.filter((val,i)=>i!==ind)
        ))
        remove(ind)
    }

    return (
        <>
            <div className="bg-slate-400 mx-10 rounded-md p-4 mt-5 flex flex-col">
                <h1 className="text-2xl  text-sky-100 text-center">Your BookMarks</h1>
                <ul >
                    {bmData.map((e, i) => (
                        <li className="my-2 " key={e.key}><BmListElement data={e.value} ikey={e.key} onDel={onDelEle}/></li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default BmList