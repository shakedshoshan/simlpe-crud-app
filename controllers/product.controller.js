const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        console.log("All products fetched successfully!");
        res.status(200).json(products)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: "Product not found"})
        console.log("Product fetched successfully!");
        res.status(200).json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        console.log("Product created successfully!");
        res.status(201).json(product)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!product) return res.status(404).json({message: "Product not found"})
        console.log("Product updated successfully!");
        res.status(200).json(product)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) return res.status(404).json({message: "Product not found"})
        console.log("Product deleted successfully!");
        res.status(204).send()
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};