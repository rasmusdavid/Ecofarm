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

mongoose.model("orders3", orderScehema);

orderRouter.get("/", async (request, response) => {
  const product = await mongoose.models.orders3.find()
  response.json(product);
});

orderRouter.post("/", async (request, response) => {
  try {
    const order = new mongoose.models.orders3(request.body);
    
    await order.save();
    response.json("Saved");
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating order");
  }
});

orderRouter.patch("/:_id", async (request, response) =>  {
  const order = await mongoose.models.orders3.findById(request.params._id)
  order.verify = true
  await order.save()
  response.json("Updated")
})


export default orderRouter;



// import { response, Router } from "express";
// import mongoose, { Schema } from "mongoose";

// const orderRouter = Router();

// const orderScehema = new Schema({
//   item: String,
//   weight: Number,
//   price: Number,
//   email: String,
//   prods: [{type: mongoose.Schema.Types.ObjectId, ref: 'products'}],
//   verify: {type:Boolean, default:false}
// });

// mongoose.model("orders", orderScehema);

// orderRouter.get("/", async (request, response) => {
//   //const order = await mongoose.models.orders.find();
//   if(request.session?.user?.email) {
//     const results = await mongoose.models.orders.find({ email: request.session.user.email})
//   response.json(results);
//   }
// });

// orderRouter.post("/", async (request, response) => {
//   console.log(request);
 
//   request.body.forEach(item => {
//     const order = new mongoose.models.orders();
//     order.item = item.item;
//     order.weight = item.weight;
//     order.price = item.price;
//     order.prods = item._id
//     order.email = request.session.user.email;
//     order.save();
//   });
//   response.json("Saved");
// });

// export default orderRouter;