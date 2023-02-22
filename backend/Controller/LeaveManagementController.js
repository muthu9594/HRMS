const LeaveDetails=require("../Models/Leave")



const addLeaveDetails = async (req,res) => {

   
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in Validation details"})
    }

    const details = req.body;
    const addDetails = new LeaveDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({msg:"Leave Details added successfully",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Leave details",error)
    }
}




const deleteLeaveDetails = async (req,res) => {
   try{
    await LeaveDetails.deleteOne({_id:req.parmas.id})
    res.status(200).json({msg:"Leave details deleted successfully"})
   }catch(error){
    res.status(500).json({msg:"Error while deleting Leave data"});
   }
} 


const EditLeaveDetails = async (req,res) => {
    let data=req.body;

    try{
   const   updatedData = await LeaveDetails.updateOne({_id:req.params.id},data)
        res.status(200).json({msg:"Leave details updated successfully", data:updatedData})

    }catch(error){
        res.status(500).json({msg:"Error while Editing Leave details"})
    }
}

const getLeaveDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await LeaveDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await LeaveDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}



module.exports={addLeaveDetails,deleteLeaveDetails,EditLeaveDetails,getLeaveDetails}