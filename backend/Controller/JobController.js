const JobDetails=require("../Models/Job")



const addJobDetails = async (req,res) => {

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in Job details"})
    }


    const details = req.body;
    const addDetails = new JobDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({msg:"Job Details added successfully",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Job details",error)
    }
}




const deleteJobDetails = async (req,res) => {
   try{
    await JobDetails.deleteOne({_id:req.parmas.id})
    res.status(200).json({msg:"Job details deleted successfully"})
   }catch(error){
    res.status(500).json({msg:"Error while deleting Job data"});
   }
} 


const EditJobDetails = async (req,res) => {
    let data=req.body;

    try{
   const   updatedData = await JobDetails.updateOne({_id:req.params.id},data)
        res.status(200).json({msg:"Job details updated successfully", data:updatedData})

    }catch(error){
        res.status(500).json({msg:"Error while Editing Job details"})
    }
}


const getJobDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await JobDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await JobDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}





module.exports={addJobDetails,deleteJobDetails,EditJobDetails,getJobDetails}