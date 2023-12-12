import mongoose from 'mongoose'


const userSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true 
        },
        password:{
            type:String,
            required:[true,"password required"],
            unique:true,
            min:[6,"Password must be 6 characters long"],
            max:15,
        }
    },
    {
        timestamps:true
    }
)

export const User = mongoose.model("User",userSchema);