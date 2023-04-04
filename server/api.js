import express from 'express'
import mongoose from 'mongoose'

const api = express()

api.use(express.json())
const conn = "mongodb+srv://rasmusdavidsson:GKSkVS1HoRofyaT8@cluster0.ksxnfyq.mongodb.net/test"

api.listen(80, () =>{
    console.log("Mongodb started")
    mongoose.connect(conn, {dbName: "ecofarm"}).then((result, error)=>{
        if(result) console.log("Connected")
        else if (error) console.error(error)
    })
})

import userRouter from './routes/user.js'
api.use('/api/users', userRouter)