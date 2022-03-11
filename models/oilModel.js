import mongoose from "mongoose";

const oilSchema = mongoose.Schema({
    
    OilUsage:String,
    Brand:String,
    OilGrade:String,
    Capasity:Number,
    StockQuantiti:Number,
    UnitPrice:Number,
    Unit:String
 
})

const OilModule =mongoose.model('oil',oilSchema);
export default OilModule;
// module.exports = {OilModule}