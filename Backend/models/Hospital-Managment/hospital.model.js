import mongoose from 'mongoose'


const hospitalSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        noOfDoctors:{
            type:Number,
            required:true
        },
        specializedIn:{
            type:String
        },
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:String, //SomeTime Pincode can be of Combination of Number and Alphabets Internationally
            required:true
        },


        
},{timestamps:true})


export const Hospital=mongoose.model("Hospital",hospitalSchema);