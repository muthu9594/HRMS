const OrganizationDetails=require("../Models/Organization")



const addOrganizationDetails = async (req,res) => {

  
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in Organization details"})
    }


    const details = req.body;
    const addDetails = new OrganizationDetails(details);
    try{
         await addDetails.save();
            res.status(200).json({msg:"Successfully added organization details",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Organization details",error)
    }
}



const deleteOrganizationDetails = async (req,res) => {
    try{
     await OrganizationDetails.deleteOne({_id:req.parmas.id})
     res.status(200).json({msg:"Organization details deleted successfully"})
    }catch(error){
     res.status(500).json({msg:"Error while deleting Organization data"});
    }
 } 
 
 
 const EditOrganizationDetails = async (req,res) => {
     let data=req.body;
 
     try{
         await OrganizationDetails.updateOne({_id:req.params.id},data)
         res.status(200).json({msg:"Organization details updated successfully", data})
 
     }catch(error){
         res.status(500).json({msg:"Error while Editing Organization details"})
     }
 }

 const getOrganizationDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await OrganizationDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await OrganizationDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

 

module.exports={addOrganizationDetails,deleteOrganizationDetails,EditOrganizationDetails,getOrganizationDetails}