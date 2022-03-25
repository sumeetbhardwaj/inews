const mongoose = require("mongoose")
const Category = require("../Models/category")

const postSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    discriptions: {
        type : String,
        required : true
    },
    category: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'Category'  
      },
    author: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'  
      },
    images: {
        type : String,
    }
},{timestamps : true})

const Post = mongoose.model("Post", postSchema)

module.exports = Post 