import { configDotenv } from "dotenv";
import express from "express";
import {connectDB} from "./src/db/db.js"
import BMroute from "./src/routes/bm.js"

configDotenv();
console.log("mongo uri ::",process.env.MONGO_URI)


const app = express()
const PORT = process.env.PORT;

app.use(express.json())

app.use('/api/BM',BMroute);
app.get('/health', (req, res) => {
    res.json({ status: 'ok', db: 'mongodb' })
});

async function start(){
    try {
        const connection = await connectDB()
        app.listen(PORT,()=>{
            console.log("server is up at port :: ", PORT)
        })
    } catch (error) {
        console.log("server isnt up :: ", error)
    }
}

start().catch((err)=>{
    console.log("failed to start")
})