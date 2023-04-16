import { response, Router } from "express";
import mongoose, { Schema } from "mongoose";

const orderRouter = Router();

const orderScehema = new Schema({
  items: [new Schema({
                      subcat: String,
                      item: String,
                      weight: Number,
                      price: Number})],
  email: String,
  sendid: String,
  total: Number,
  verify: {type:Boolean, default:false}
});

mongoose.model("orders", orderScehema);

orderRouter.get("/", async (request, response) => {
  const order = await mongoose.models.orders.find();
  response.json(order)
  // if(request.session?.user?.email) {
  //   const results = await mongoose.models.orders.find({ email: request.session.user.email})
  // response.json(results);
  // }
});

orderRouter.post("/", async (request, response) => {
  console.log(request);
  const order = new mongoose.models.orders();
  order.items = request.body.items
  order.email = request.session.user.email;
  order.sendid = request.session.user.id;
  order.total = request.body.total;
  order.save();
  response.json("Saved");
});

export default orderRouter;
