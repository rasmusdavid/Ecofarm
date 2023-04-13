import { Router } from "express";
import mongoose, { Schema } from "mongoose";

const msgRouter = Router()

export const msgSchema = new Schema({
    title: String,
    text: String,
    sender: String},
    { _id: false })

msgRouter.get('/', async (req, res) =>{
    const user = await mongoose.models.users.find()
    response.json(user)
})


msgRouter.get('/:id', async (req, res) =>{
    const user = await mongoose.models.users.findById( req.params.id )
    res.json(user)
})

msgRouter.post('/:id', async (req, res) =>{
    console.log( req.body, req.params.id)
    const test = { title: req.body.title, text: "Igen", sender: "Ingen" }
    const user = await mongoose.models.users.findByIdAndUpdate( 
        { _id: req.params.id },
        { $push: { messages: req.body}} )
    console.log( user )
    res.json(user)
})

msgRouter.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    await mongoose.models.users.findByIdAndUpdate(
        { _id: req.params.id },
        { $pull: { "messages": { "sender": req.body.sender, "text": req.body.text } }}
    );
    res.json("Deleted");
  });

export default msgRouter