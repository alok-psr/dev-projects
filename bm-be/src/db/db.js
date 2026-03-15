import mongoose from 'mongoose'


async function connectDB(){
    try {
        const MongoURI = process.env.MONGO_URI;
        const DB_NAME = process.env.DB_NAME;
        console.log("----------- Mongo URI -----------", MongoURI,'/',DB_NAME)
        await mongoose.connect(`${MongoURI}/${DB_NAME}`);
        console.log("DB connected")
    } catch (error) {
        console.log("err occoured :: ", error)
    }
}

export {connectDB}