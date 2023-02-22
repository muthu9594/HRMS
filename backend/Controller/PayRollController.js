const PayRollDetails=require("../Models/PayRoll")



const addPayRollDetails = async (req,res) => {

 
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in PayRoll details"})
    }

    const details = req.body;
    const addDetails = new PayRollDetails(details);

    try{
         await addDetails.save();
        res.status(200).json({msg:"Successfully added PayRoll details",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding PayRoll details",error)
    }
}



const deletePayRollDetails = async (req,res) => {
    try{
     await PayRollDetails.deleteOne({_id:req.parmas.id})
     res.status(200).json({msg:"PayRoll details deleted successfully"})
    }catch(error){
     res.status(500).json({msg:"Error while deleting PayRoll data"});
    }
 } 
 
 
 const EditPayRollDetails = async (req,res) => {
     let data=req.body;
 
     try{
         await PayRollDetails.updateOne({_id:req.params.id},data)
         res.status(200).json({msg:"PayRoll details updated successfully", data})
 
     }catch(error){
         res.status(500).json({msg:"Error while Editing PayRoll details"})
     }
 }

 const getPayRollDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await PayRollDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await PayRollDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

 

module.exports={addPayRollDetails,deletePayRollDetails,EditPayRollDetails,getPayRollDetails}