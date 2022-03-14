import mongoose from "mongoose";

const oilUsegSchema = mongoose.Schema({
    
    OilUsageAr:String,
    OilUsageEn:String,

})
const OilUsegModule =mongoose.model('oilUsge',oilUsegSchema);

export default OilUsegModule;
