import mongoose from "mongoose";

const sparkSchema = mongoose.Schema({
    
    originated:String,
    
    Brand:String,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    StockNumber:String,
    ItemImage:String,
    MinQty:Number
 
})

const sparkModule =mongoose.model('spark',sparkSchema);
export default sparkModule;