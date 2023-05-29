import express from "express";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    picture: {
        type: String,
        default: "",
    },
    products: {
        type: Map,
        of: Boolean,
    },
    favorites: {
        type: Map,
        of: Boolean,
    },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;