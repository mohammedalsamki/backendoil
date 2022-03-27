import mongoose from "mongoose";

const lampsSchema = mongoose.Schema({
    
    lampsUsage:String,
    EStander:String,
    Brand:String,
    lampsGrade:String,
    Capasity:Number,
    StockNumber:String,
    StockQuantiti:Number,
    UnitPrice:Number,
    Unit:String,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    MinQty:Number
 
})

const lampsModule =mongoose.model('lamps',lampsSchema);
export default lampsModule;
