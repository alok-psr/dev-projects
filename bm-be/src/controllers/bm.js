import { Bookmark } from "../models/BM.js";

async function getAll(req,res){
    try {
        console.log("-------------------fetch successfull--------------------")
        const allBms = await Bookmark.find() 
        res.status(201).json(allBms);
    } catch (error) {
        console.log('------------fetch failed-----------')
        console.log("err occ while fetching bms :: ", error );
        res.status(401).json({err: "unable to fetch BM"})
    }
}

async function writeBM(req,res){
    const {url} = req.body
    try {
        console.log("-------- writeBM success ------------")
        const resp = await Bookmark.create({url}) 
        res.status(201).json(resp)
    } catch (error) {
        console.log("-------- writeBM err ------------")
        console.log(error)
        res.status(401).json({err: "unable to add BM"})
    }
}

async function deleteBM(req,res){
    try {
        console.log("id passed ::: ", req.params.id)
        const del = await Bookmark.deleteOne({_id : req.params.id})
        res.status(201).json(del)
        console.log("-------- del success -------------\n",del)
    } catch (error) {
        console.log("-------- failed deleteBM -------------")
        console.log(error);
        res.status(400).json({err:"unable to delete BM"})
    }
}

export {getAll, writeBM, deleteBM};