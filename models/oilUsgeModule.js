import mongoose from "mongoose";

const oilUsegSchema = mongoose.Schema({
    
    OilUsageAr:String,
    OilUsageEn:{ type: String , required: true},


})
const OilUsegModule =mongoose.model('oilUsge',oilUsegSchema);

export default OilUsegModule;
