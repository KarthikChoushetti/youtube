import mongoose from "mongooes"
const catogeryschema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
    }
    },{timestamps:true}
    )
    export const Catogery=mongoose.model("Catogery",catogeryschema) 