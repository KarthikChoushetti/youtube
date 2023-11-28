import mongoose from "mongoose"
const productschema =  new mongoose.Schema(
    {
description:{
type:String,
required:true,
},
name:{
    type:String,
    required:true,
},
productImage:{
    type:string
},
price:{
    type:Number,
    default:0
},
stock:{
    type:Number,
    default:0
},
categeory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Catogery",
    required:true
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}
},{timestamps:true}
)
export const Product=mongoose.model('Product',productschema)