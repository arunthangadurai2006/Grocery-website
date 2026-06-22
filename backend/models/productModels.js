const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    description:String,
    ratings: String,
    images: [{
        image: String
}],
catergory : String,
Seller: String,
stock: String,
numOfReview: String,
createdAt: Date
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;