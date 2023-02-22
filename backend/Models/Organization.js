const mongoose=require('mongoose');

const OrganizationSchema= mongoose.Schema({
    DepartmentName:{
        type:String,
        require:true
    },
    DesignationName:{
        type:String,
        require:true
    }

},{timestamps:true})


const Organization=mongoose.model('Organization',OrganizationSchema);
module.exports=Organization;