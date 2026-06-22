const ProductModel = require('../models/productModels');
//get product api- /api/v1/product
exports.getProducts = async(req, res, next) => {
    const products = await ProductModel.find({});
    res.json({
        success: true,
        products
    })
}
//get product api- /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {
    console.log(req.params.id, 'ID')
    const product =await ProductModel.findById(req.params.id);
    res.json({
        sucess: true,
        product
    })
}