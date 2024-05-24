const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema(
    {
    userName:{
        type:String,
        required:[true,`user name is required `]
    },
    email:{
        type:String,
        required:[true,`email is required`],
        unique:true,
    },
    password:{
        type:String,
        required:[true,`password is required`],
    },
    address:{
        type:Array,
    },
    phone:{
        type:String,
        required:[true,`phone no is required`],
    },
    usertype:{
        type:String,
        required:[true,`user type is required `],
        default:'clinet',
        enum:['clinet','admin','vendor',]
    },
    profile:{
        type:String,
        default:"https://www.flaticon.com/free-icon/profile_3135715"
    },
    answer: {
        type: String,
        required: [true, "Asnwer is required"],
      },
},{timestamps:true})

//exoprt
module.exports = mongoose.model("User",userSchema)