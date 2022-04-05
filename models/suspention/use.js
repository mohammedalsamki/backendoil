import mongoose from "mongoose";

const SuspentionsUsegSchema = mongoose.Schema({
    
    SuspentionsUsageAr:String,
    SuspentionsUsageEn:{ type: String , required: true},
    

})
const SuspentionsUsegModule =mongoose.model('SuspentionsUse',SuspentionsUsegSchema);

export default SuspentionsUsegModule;