const mongoose=require("mongoose");
const petSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},species:{type:String,required:true,enum:["Dog","Cat","Other"]},breed:{type:String,default:""},age:{type:Number,min:0,default:0},description:{type:String,default:""},imageUrl:{type:String,default:""},adoptionStatus:{type:String,enum:["Available","Pending","Adopted"],default:"Available"}},{timestamps:true});
module.exports=mongoose.model("Pet",petSchema);
