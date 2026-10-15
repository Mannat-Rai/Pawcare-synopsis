const mongoose=require("mongoose");
const bookingSchema=new mongoose.Schema({customerName:{type:String,required:true,trim:true},email:{type:String,required:true,lowercase:true,trim:true},service:{type:String,required:true,enum:["Grooming","Veterinary care","Pet sitting"]},appointmentDate:{type:Date,required:true},notes:{type:String,default:""},status:{type:String,enum:["Pending","Confirmed","Cancelled"],default:"Pending"}},{timestamps:true});
module.exports=mongoose.model("Booking",bookingSchema);
