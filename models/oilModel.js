import mongoose from "mongoose";

const oilSchema = mongoose.Schema({
    
    OilUsage:String,
    Brand:String,
    OilGrade:String,
    Capasity:Number,
    StockNumber:String,
    UnitPrice:Number,
    Unit:String,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    MinQty:Number
 
})

const OilModule =mongoose.model('oil',oilSchema);
export default OilModule;
