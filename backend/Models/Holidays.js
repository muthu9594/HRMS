const mongoose =  require('mongoose');

const HolidaySchema = mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    HolidayType:{
        type:String,
        require:true
    },
    HolidayStartDate:{
        type:String,
        require:true
    },
    HolidayEndDate:{
        type:String,
        require:true
    },
    HolidayDetails:{
        type:String,
        require:true
    }
},{timestamps:true})


const Holidays = mongoose.Model('Holiday',HolidaySchema);
module.exports=Holidays;