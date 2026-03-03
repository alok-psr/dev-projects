import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    }
},{timestamps:true})

const Bookmark = mongoose.model('Bookmark',BookmarkSchema);

export {Bookmark}