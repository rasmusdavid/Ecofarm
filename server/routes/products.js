import { response, Router } from "express";
import mongoose, {Schema } from "mongoose";



const productRouter = Router()

const productSchema = new Schema( {
    category: String,
    subcat: String,
    item: String,
    description: String,
    weight: Number,
    price: Number,
    image: String
    
})

mongoose.model('products', productSchema)

productRouter.get('/', async (request, response) =>{
    const product = await mongoose.models.products.find()
    response.json(product)
})

productRouter.post('/', async (request, response) =>{
    console.log(request.body);
    const product = new mongoose.models.products()
    product.category = request.body.category
    product.subcat = request.body.subcat
    product.item = request.body.item
    product.description = request.body.description
    product.weight = request.body.weight
    product.price = request.body.price
    product.image = request.body.image
    await product.save()
    response.json("Saved")
})

productRouter.delete('/:id', async (request, response) => {
    const productId = request.params.id;
    await mongoose.models.products.findByIdAndDelete(productId);
    response.json("Deleted");
})

export default productRouter