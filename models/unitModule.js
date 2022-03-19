import mongoose from "mongoose";

const UnitSchema = mongoose.Schema({
    
    UnitNameEn:String,
    UnitNameAr:String,


})
const UnitModule =mongoose.model('Unit',UnitSchema);

export default UnitModule;
