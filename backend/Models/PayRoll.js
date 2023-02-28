const mongoose = require('mongoose');


const payRollSchema = mongoose.Schema({
    EmpId:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    },
    Disignation:{
        type:String,
        require:true
    },
    Mobile:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Salary:{
        type:String,
        require:true
    },
    joiningDate:{
        type:Date,
        require:true
    }
},{timestamps:true})


const PayRoll = mongoose.model('PayRoll',payRollSchema);
module.exports = PayRoll;
