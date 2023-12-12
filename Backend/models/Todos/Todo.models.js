import mongoose from "mongoose";

/**
 * Represents the schema for a Todo.
 *
 * @typedef {Object} TodoSchema
 * @property {string} content - The content of the Todo.
 * @property {boolean} completed - Indicates whether the Todo is completed or not.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the Todo.
 * @property {Array<mongoose.Schema.Types.ObjectId>} subTodos - An array of sub-Todo IDs.
 * @property {Date} createdAt - The timestamp when the Todo was created.
 * @property {Date} updatedAt - The timestamp when the Todo was last updated.
 */
const todoSchema = new mongoose.Schema({
    content :{
        type:String,
        required:true,
        unique:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User"
        /* Special Type Used for Fetching Other Schema Properties
            Here We used this to Get any of the Schema 
            And After that we used 
            ref :"User" Where we are specifing the Schema 
            the type should take  
        */
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        /* Special Type Used for Fetching Other Schema Properties
            Here We used this to Get any of the Schema 
            And After that we used 
            ref :"SubTodo" Where we are specifing the Schema 
            the type should take  
        */
        }
    ] //Array of Sub-Todos
}, { timestamps: true });

export const Todo=mongoose.model("Todo",todoSchema);// (Name , Schema) 
/* Here the Important Thing is we Export this thing 
   and We use this in other files Rather than Getting it Mongodb Database
   and In the Mongodb Database the DataBase name Will be in 
   
   "todos" which is lowerCase and Plural    */