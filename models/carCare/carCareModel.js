import mongoose from "mongoose";

const carCareSchema = mongoose.Schema({
    
    carCareUsage:String,
    Brand:String,
    carCareGrade:String,
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

const carCareModule =mongoose.model('carCare',carCareSchema);
export default carCareModule;
