const mongoose = require("mongoose");
const { loveData } = require("./model");
const HelloDataschema = new mongoose.Schema({
   studentId:{
        type: String,
        ref:"loveData"
    },
    fathersName: {
        type:String
    },
    mothersName: {
        type:String
    },
    schoolName: {
        type:String
    },
    class: {
        type:Number
    },
    roolNumber: {
        type:Number
    },
    roolCode: {
        type:Number
    },
    BoradName: {
        type:String
    }

})

const HelloData = mongoose.model("HelloData", HelloDataschema);
module.exports={HelloData}