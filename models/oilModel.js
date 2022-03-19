import mongoose from "mongoose";

const oilSchema = mongoose.Schema({
    
    OilUsage:String,
    Brand:String,
    OilGrade:String,
    Capasity:Number,
    StockQuantiti:Number,
    UnitPrice:Number,
    Unit:String,
    SaelsPrice:Number,
    Note:String,
    PartNumber:Number,
    StockNumber:Number,
    ItemImage:String
 
})

const OilModule =mongoose.model('oil',oilSchema);
export default OilModule;
