import mongoose from "mongoose";

const oilUsegSchema = mongoose.Schema({
    
    OilUsageAr:String,
    OilUsageEn:{ type: String , required: true},
    Specs:[String]

})
const OilUsegModule =mongoose.model('oilUsge',oilUsegSchema);

export default OilUsegModule;
