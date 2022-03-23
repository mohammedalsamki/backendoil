import mongoose from "mongoose";

const brakeSchema = mongoose.Schema({
    
    brakeUsage:String,
    Brand:String,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    PartNumber:String,
    StockNumber:Number,
    ItemImage:String,
    MinQty:Number
 
})

const BrakeModule =mongoose.model('brake',brakeSchema);
export default BrakeModule;