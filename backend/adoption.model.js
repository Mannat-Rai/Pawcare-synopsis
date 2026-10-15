const mongoose=require("mongoose");
const adoptionSchema=new mongoose.Schema({petId:{type:mongoose.Schema.Types.ObjectId,ref:"Pet",required:true},applicantName:{type:String,required:true,trim:true},email:{type:String,required:true,lowercase:true,trim:true},phone:{type:String,required:true,trim:true},reason:{type:String,required:true,trim:true},status:{type:String,enum:["Pending","Approved","Rejected"],default:"Pending"}},{timestamps:true});
module.exports=mongoose.model("Adoption",adoptionSchema);
