import { Router } from "express";
import mongoose, { Schema } from "mongoose";
import { msgSchema } from "./message.js";

const userRouter = Router()

const userSchema = new Schema({
    username: String,
    email: String,
    admin: {type:Boolean, default:false},
    password: String,
    messages: [ msgSchema ]
})

mongoose.model('users', userSchema)

userRouter.get('/', async (request, response) =>{
    const user = await mongoose.models.users.find()
    response.json(user)
})

userRouter.post('/', async (request, response)=>{
    const user = new mongoose.models.users()
    user.username = request.body.username
    user.email = request.body.email
    user.admin = request.body.admin
    user.password = request.body.password
    user.messages = request.body.messages
    await user.save()
    response.json("Saved")
})

userRouter.post('/:id', async (req, res)=>{
        const account = await mongoose.models.users.findById(req.params.id)
        account.username = req.body.username ?? account.username
        account.email = req.body.email ?? account.email
        account.password = req.body.password ?? account.password
        await account.save()
        res.json(account)
})

userRouter.delete('/:id', async (request, response) => {
    const userId = request.params.id;
    await mongoose.models.users.findByIdAndDelete(userId);
    response.json("Deleted");
  });

export default userRouter