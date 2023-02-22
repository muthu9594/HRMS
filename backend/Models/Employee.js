const mongoose =require('mongoose');

const employeeSchema=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    EmployeeCode :{
        type:String,
        require:true
    },
    Role:{
        type:String,
        require:true
    },
    Department	:{
        type:String,
        require:true
    },
    Designation	:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    ContactNumber:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    DateOfJoining:{
        type:Date,
        require:true
    },
    DOB:{
        type:Date,
        require:true
    },
    Address:{
        type:String,
        require:true
    }

},{timestamps:true})


const Employee = mongoose.model('EmployeeDetail',employeeSchema);

module.exports=Employee;