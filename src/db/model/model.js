const mongoose = require("mongoose");
const loveDataschema = new mongoose.Schema({
    name: {
        type:String
    },
    class: {
        type:Number
    },
    roll: {
        type:Number
    },
    roomNo: {
        type:Number
    },
    date: {
        type: String,
        require: true,
        uniqe:true
    },
    day: {
        type:String
    },
    month: {
        type:String
    },
    year: {
        type: Number,
        require: true,
        uniqe:true
    }
})
const loveData = mongoose.model("loveData", loveDataschema);
module.exports={loveData}