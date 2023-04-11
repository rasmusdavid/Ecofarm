import { response, Router } from "express";
import mongoose, { Schema } from "mongoose";

const orderRouter = Router();

const orderScehema = new Schema({
  item: String,
  weight: Number,
  price: Number,
  email: String,
});

mongoose.model("orders", orderScehema);

orderRouter.get("/", async (request, response) => {
  const order = await mongoose.models.orders.find();
  response.json(order);
});

orderRouter.post("/", async (request, response) => {
  console.log(request.body);
  const order = new mongoose.models.orders();
  order.item = request.body.item;
  order.weight = request.body.weight;
  order.price = request.body.price;
  order.email = request.body.email;
  order.save();
  response.json("Saved");
});

export default orderRouter;
