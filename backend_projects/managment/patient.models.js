import mongoose from "mongoose"
const patientschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        diagnosed_with:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true,
        },
        bloodGroup:{
            type:String,
            enum:["A","A-","B","B-","o","o-","AB","AB-"],
            required:true
        },
        gender:{
            type:String,
            enum:["Male","Female","Transgender"],
            required:true
        },
        hospital_name:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true
        }
},{tiumestamps:true}
    )
export const Patient=mongoose.model('Patient',patientschema)
