import mongoose from "mongoose";

const BearingsUsegSchema = mongoose.Schema({
    
    BearingsUsageAr:String,
    BearingsUsageEn:{ type: String , required: true},
    

})
const BearingsUsegModule =mongoose.model('BearingsUse',BearingsUsegSchema);

export default BearingsUsegModule;