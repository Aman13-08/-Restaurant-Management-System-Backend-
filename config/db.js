const mongoose =require("mongoose");
const colors =require('colors');
const router = require("../routes/testRoutes");

//db connection
const connectDB =async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Database !!,  ${mongoose.connection.host}`.bgCyan)
    }
    catch(error){
        console.log("DB Error" , error.bgred)
    }
}

module.exports =connectDB;