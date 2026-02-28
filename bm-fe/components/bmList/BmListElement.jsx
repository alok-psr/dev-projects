

function BmListElement({data,ikey,onDel}) {
  
  function handleDelete(e){
    
    e.preventDefault();
    console.log('i key -- ',ikey)
    onDel(ikey)
  }
  function handleEdit(){} // -- for edit feature in future


    return (
        <>
          <div className="flex justify-around mx-auto bg-slate-700 hover:bg-slate-600 rounded-sm">
            <input type="text" className="text-lg w-2/3 text-slate-100 overflow-auto " disabled value={data} />
            
            <button className="bg-red-600 h-fit w-fit hover:bg-red-700 text-slate-100 rounded-md px-2 m-1 py-1 " onClick={handleDelete}>delete</button>
{/* 
            <button className="bg-sky-600 m-1 hover:bg-sky-700 text-slate-100 rounded-md px-2 py-1 " onClick={handleEdit}>Edit</button> ------ maybe in future */}
          </div>
        </>
    )
}

export default BmListElement