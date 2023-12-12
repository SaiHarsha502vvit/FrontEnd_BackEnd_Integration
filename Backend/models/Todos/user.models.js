import mongoose from 'mongoose'


/**
 * User Schema
 * @typedef {Object} UserSchema
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {Date} createdAt - The timestamp when the user was created.
 * @property {Date} updatedAt - The timestamp when the user was last updated.
 */
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
    /* 
      Mongoose schemas support a timestamps option.
      If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
      createdAt: a date representing when this document was created
      updatedAt: a date representing when this document was last updated
  */
)

export const User = mongoose.model("User",userSchema);// (Name , Schema) 
/* Here the Important Thing is we Export this thing 
   and We use this in other files Rather than Getting it Mongodb Database
   and In the Mongodb Database the DataBase name Will be in 
   
   "users" which is lowerCase and Plural    */