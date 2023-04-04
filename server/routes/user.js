import { response, Router } from "express";
import mongoose, { Schema } from "mongoose";

const userRouter = Router()

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

mongoose.model('users', userSchema)

userRouter.get('/', async (request, response) =>{
    const user = await mongoose.models.users.find()
    response.json(user)
})

userRouter.post('/', async (request, response)=>{
    console.log(request.body);
    const user = new mongoose.models.users()
    user.username = request.body.username
    user.email = request.body.email
    user.password = request.body.password
    await user.save()
    response.json("Saved")
})

export default userRouter