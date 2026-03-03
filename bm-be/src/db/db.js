import mongoose from 'mongoose'


async function connectDB(){
    try {
        const MongoURI = process.env.MONGO_URI;
        console.log("----------- Mongo URI -----------", process.env.MONGO_URI)
        await mongoose.connect(MongoURI);
        console.log("DB connected")
    } catch (error) {
        console.log("err occoured :: ", error)
    }
}

export {connectDB}