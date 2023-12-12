import mongoose from "mongoose";    


/**
 * Represents the schema for an order item in the E-commerce system.
 * @typedef {Object} OrderItemSchema
 * @property {mongoose.Schema.Types.ObjectId} productId - The ID of the product associated with the order item.
 * @property {number} quantity - The quantity of the product in the order item.
 */
const orderItemSchema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

/**
 * Represents the schema for an order in the E-commerce system.
 * @typedef {Object} OrderSchema
 * @property {number} orderprice - The price of the order.
 * @property {mongoose.Schema.Types.ObjectId} customer - The ID of the customer who placed the order.
 * @property {Array.<OrderItemSchema>} orderitems - The items included in the order.
 * @property {Date} createdAt - The date and time when the order was created.
 * @property {Date} updatedAt - The date and time when the order was last updated.
 */
const orderSchema=mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderitems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:
    {
        type:String,
        enum:["Pending","cancelled","Delivered"],
        default:"Pending"   
    }
},{timestamps:true});


export const Order = mongoose.model("Order",orderSchema);