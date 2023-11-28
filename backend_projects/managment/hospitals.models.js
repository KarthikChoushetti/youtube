import mongoose from "mongoose"
const hospitalschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specialized_in:
        [
            {
                type:String
            }
        ]
    
},{timestamps:true})
export const Hospital=mongoose.model("Hospital",hospitalschema)