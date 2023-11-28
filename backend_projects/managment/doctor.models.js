import mongoose from "mongoose"
const doctorschema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
        qualifications:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            default:0
        },
        works_in_Hospitals:
            [
                {
                  type:mongoose.Schema.Types.ObjectId,
                  ref:"Hospital"
            }
        ]
    
},{timestamps:true}
)
export const Doctor =mongoose.model("Doctor",doctorschema)