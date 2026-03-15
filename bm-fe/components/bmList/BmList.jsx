import {  remove } from "../../data/urlData";
import BmListElement from "./BmListElement";

function BmList({bmData,setBmData,fetchData}){

    async function onDelEle(id){
        try {
            const resp =await fetch(`http://localhost:8080/api/BM/${id}`,{
                method:'DELETE'
            })
            const data =await resp.json();
            console.log("delete success -----------\n",data)
            await fetchData()
            console.log(bmData)
        } catch (err) {
            console.log("deletion failed :: ", err)    
        }
        
    }

    return (
        <>
            <div className="bg-slate-400 mx-10 rounded-md p-4 mt-5 flex flex-col">
                <h1 className="text-2xl  text-sky-100 text-center">Your BookMarks</h1>
                <ul >
                    {bmData.map((e, i) => (
                        <li className="my-2 " key={e._id}><BmListElement data={e.url} ikey={e._id} onDel={onDelEle}/></li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default BmList