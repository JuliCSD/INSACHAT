import express from "express";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    ownerId: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        min: 3,
    },
    pictures: {
        type: Array,
        default: [],
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;