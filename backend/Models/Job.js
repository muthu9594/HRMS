const mongoose = require('mongoose');

const JobSchema =  mongoose.Schema({
    JobTitle:{
        type:String,
        require:true
    },
    PositionType:{
        type:String,
        require:true
    },
    Department:{
        type:String,
        require:true
    },
    NoOfPositions:{
        type:String,
        require:true
    },
    InterviewDate:{
        type:Date,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    ReportingTo:{
        type:String,
        require:true
    },
    DesiredQualification:{
        type:String,
        require:true
    }
});

const Job = mongoose.model('Job',JobSchema);
module.exports = Job;