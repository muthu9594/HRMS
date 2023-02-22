const HolidayDetails=require("../Models/Holidays")



const addHolidayDetails = async (req,res) => {

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({msg:"please check your data in Holiday details"})
    }


    const details = req.body;
    const addDetails = new HolidayDetails(details);
    
    try{
         await addDetails.save();
            res.status(200).json({msg:"Successfully added Holiday details",data:addDetails})
    }catch(error){
        res.status(500).json("Error while adding Holiday details",error)
    }
}



const deleteHolidayDetails = async (req,res) => {
    try{
     await HolidayDetails.deleteOne({_id:req.parmas.id})
     res.status(200).json({msg:"Holiday details deleted successfully"})
    }catch(error){
     res.status(500).json({msg:"Error while deleting Holiday data"});
    }
 } 
 
 
 const EditHolidayDetails = async (req,res) => {
     let data=req.body;
 
     try{
         await HolidayDetails.updateOne({_id:req.params.id},data)
         res.status(200).json({msg:"Holiday details updated successfully", data})
 
     }catch(error){
         res.status(500).json({msg:"Error while Editing Holiday details"})
     }
 }

 const getHolidayDetails =async (req,res)=>{
    const s = 0
    try{
        //  const response= await CustomerDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")
           const response= await HolidayDetails.find({}, null, {limit : req.body.limit, skip : req.body.pno  * req.body.limit }).sort("-createdAt")

         const count = await HolidayDetails.countDocuments();

            res.status(200).json({response, count})
    }catch(error){
        res.status(404).json({msg:error})
    }
}

 

module.exports={addHolidayDetails,deleteHolidayDetails,EditHolidayDetails,getHolidayDetails}