import { response, Router } from "express";
import mongoose, { Schema } from "mongoose";

const orderRouter = Router();

const orderScehema = new Schema({
  item: String,
  weight: Number,
  price: Number,
  email: String,
  orderOwner: String
});

mongoose.model("orders", orderScehema);

orderRouter.get("/", async (request, response) => {
  //const order = await mongoose.models.orders.find();
  if(request.session?.user?.email) {
    const results = await mongoose.models.orders.find({ email: request.session.user.email})
  response.json(results);
  }
});

orderRouter.post("/", async (request, response) => {
  console.log(request);
 
  request.body.forEach(item => {
    const order = new mongoose.models.orders();
    order.item = item.item;
    order.weight = item.weight;
    order.price = item.price;
    order.email = request.session.user.email;
    order.save();
  });
  response.json("Saved");
});

export default orderRouter;
