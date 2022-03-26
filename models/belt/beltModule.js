import mongoose from "mongoose";

const beltSchema = mongoose.Schema({
    
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

const beltModule =mongoose.model('belt',beltSchema);
export default beltModule;