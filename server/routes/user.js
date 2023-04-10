import { Router } from "express";
import mongoose, { Schema } from "mongoose";

const userRouter = Router()

const userSchema = new Schema({
    username: String,
    email: String,
    admin: {type:Boolean, default:false},
    password: String,
    messages: { in: {type: Boolean, default:true },
                author: String,
                text: String,
                orderID: Number}
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
    user.admin = request.body.admin
    user.password = request.body.password
    user.messages = request.body.messages
    await user.save()
    response.json("Saved")
})

userRouter.patch('/:id', async (req, res)=>{
    try{
        const account = await mongoose.models.users.findById(req.params.id)
        console.log(req.params.id)
        account.username = req.body.username ?? account.username
        account.email = req.body.email ?? account.email
        account.password = req.body.password ?? account.password
        await account.save()
        res.json(account)
    }catch(err){ res.status(400).json({ message: err.message }) }
})

userRouter.delete('/:id', async (request, response) => {
    const userId = request.params.id;
    await mongoose.models.users.findByIdAndDelete(userId);
    response.json("Deleted");
  });

export default userRouter