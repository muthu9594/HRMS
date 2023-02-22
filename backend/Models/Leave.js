const mongoose = require('mongoose');


const LeaveSchema = mongoose.Schema({
    EmployeeName:{
        type:String,
        require:true
    },
    LeaveType:{
        type:String,
        require:true
    },
    FromDate:{
        type:String,
        require:true
    },
    ToDate:{
        type:Date,
        require:true
    }
},{timestamps:true})



const Leave = mongoose.model('LeaveDetail',LeaveSchema);

module.exports=Leave;