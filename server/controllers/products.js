import Product from '../models/Product.js';

/*CREATE*/
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();

        const product = await Product.find();

        res.status(201).json(product);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

/*READ*/
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}