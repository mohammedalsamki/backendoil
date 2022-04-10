import mongoose from "mongoose";

const WiperSchema = mongoose.Schema({
    
    WiperUsage:String,
    Brand:String,
    WiperGrade:String,
    Tall:Number,
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

const WiperModule =mongoose.model('Wiper',WiperSchema);
export default WiperModule;