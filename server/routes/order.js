import { response, Router } from "express";
import mongoose, { Schema } from "mongoose";

const orderRouter = Router();

const orderScehema = new Schema({
  email: String,
  prods: [{type: String, ref: 'products'}],
  sum: [{type: Number, ref: 'products'}],
  verify: {type:Boolean, default:false}
});

mongoose.model("orders", orderScehema);

orderRouter.get("/", async (request, response) => {
  if(request.session?.user?.admin){
    const results = await mongoose.models.orders.find()
    response.json(results);
  }
  else if(request.session?.user?.email) {
    const results = await mongoose.models.orders.find({ email: request.session.user.email})
  response.json(results);
  }
});

orderRouter.post("/", async (request, response) => {
  try {
    const order = new mongoose.models.orders({
      prods: request.body.map(item => item.item),
      sum: request.body.map(item => item.price),
      email: request.session.user.email
    });
    
    await order.save();
    response.json("Saved");
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating order");
  }
});

orderRouter.patch("/:_id", async (request, response) =>  {
  const order = await mongoose.models.orders.findById(request.params._id)
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