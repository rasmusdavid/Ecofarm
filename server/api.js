import express from "express";
import mongoose from "mongoose";
import session from "express-session";

const api = express();
const port = 3010;

api.use(
  session({
    secret: "keyboradwhale",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 3,
    },
  })
);

api.use(express.json());
const conn =
  "mongodb+srv://rasmusdavidsson:GKSkVS1HoRofyaT8@cluster0.ksxnfyq.mongodb.net/test";

api.listen(port, () => {
  console.log("Mongodb started");
  mongoose.connect(conn, { dbName: "ecofarm" }).then((result, error) => {
    if (result)
      console.log("Ecofarm server running on http://locahost:" + port);
    else if (error) console.error(error);
  });
});

import userRouter from "./routes/user.js";
api.use("/api/users", userRouter);

import loginRouter from "./routes/login.js";
api.use("/api/login", loginRouter);

import productRouter from "./routes/products.js";
api.use("/api/products", productRouter);

import orderRouter from "./routes/order.js";
api.use("/api/orders", orderRouter);
