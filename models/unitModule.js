import mongoose from "mongoose";

const UnitSchema = mongoose.Schema({
    
    UnitName:String,
    UnitDis:String,


})
const UnitModule =mongoose.model('Unit',UnitSchema);

export default UnitModule;
