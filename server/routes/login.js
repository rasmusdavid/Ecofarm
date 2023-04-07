import { response, Router } from "express";
import mongoose from "mongoose";

const loginRouter = Router()

loginRouter.post('/', async (request, response)=> {
    const user = await mongoose.models.users.findOne({
        email: request.body.email,
        password: request.body.password
    })
    if(user){
        response.status(201)
        request.session.user = user
        response.json({LoggedIn : true})
    }
    else{
        response.status(401)
        response.json({LoggedIn : false})
    }
})

loginRouter.get('/', async(request, response)=>{
    if(request.session?.user){
        const user = await mongoose.models.users.findOne({
            email: request.session.user.email,
            password: request.session.user.password
        })
        if(user){
            response.json({
                username: request.session.user.username,
                email: request.session.user.email,
                LoggedIn : true
            })
            return
        }
    } response.json({LoggedIn : false})
})

loginRouter.delete('/', (request, response)=>{
    delete(request.session.user)
    response.json({LoggedIn : false})
})

export default loginRouter