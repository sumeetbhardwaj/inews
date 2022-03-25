const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const { Post } = require("../Models");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fname: {
        type : String,
        required : true
    },
    email: {
        type : String,
        unique: true,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    gender: {
        type : String,
    },
    dob: {
        type : String,
    },
    avtar: {
        type : String,
    },
    phone: {
        type : Number,
    },
    post_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Post'  
      },
    role: {
        type : Number,
        default : 0
    },
    tokens : [{
        token : {
            type : String,
        required : true
        }
    }]
},{timestamps : true})


userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();
    } catch (error) {
        console.log(error);
    }
}
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})
const User = mongoose.model("User", userSchema)

module.exports = User 