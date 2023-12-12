import mongoose from "mongoose";

/**
 * Sub Todo Schema
 * @typedef {Object} SubTodoSchema
 * @property {string} content - The content of the sub todo.
 * @property {boolean} complete - Indicates whether the sub todo is complete or not.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the sub todo.
 * @property {Date} createdAt - The timestamp when the sub todo was created.
 * @property {Date} updatedAt - The timestamp when the sub todo was last updated.
 */
const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      /* Special Type Used for Fetching Other Schema Properties
            Here We used this to Get any of the Schema 
            And After that we used 
            ref :"User" Where we are specifing the Schema 
            the type should take  
      */
    },
  },
  { timestamps: true }
  /* 
      Mongoose schemas support a timestamps option.
      If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
      createdAt: a date representing when this document was created
      updatedAt: a date representing when this document was last updated
  */
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema); // (Name , Schema)
/* Here the Important Thing is we Export this thing 
   and We use this in other files Rather than Getting it Mongodb Database
   and In the Mongodb Database the DataBase name Will be in 
   
   "subtodos" which is lowerCase and Plural    */
