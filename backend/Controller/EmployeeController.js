const EmployeeDetails=require("../Models/Employee")
const {validationResult}=require('express-validator')



const addEmployeeDetails = async (req,res) => {

   
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in Employee details"})
    }


    const details = req.body;
    console.log(details)
    const addDetails = new EmployeeDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({msg:"Employee details added successfully",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Employee details",error)
    }
}




const deleteEmployeeDetails = async (req,res) => {
   try{
    await EmployeeDetails.deleteOne({_id:req.parmas.id})
    res.status(200).json({msg:"Employee details deleted successfully"})
   }catch(error){
    res.status(500).json({msg:"Error while deleting Employee data"});
   }
} 


const EditEmployeeDetails = async (req,res) => {
    let data=req.body;

    try{
        await EmployeeDetails.updateOne({_id:req.params.id},data)
        res.status(200).json({msg:"Employee details updated successfully", data})

    }catch(error){
        res.status(500).json({msg:"Error while Editing Employee details"})
    }
}


const getEmployeeDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await EmployeeDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await EmployeeDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}



module.exports={addEmployeeDetails,getEmployeeDetails,EditEmployeeDetails,deleteEmployeeDetails}