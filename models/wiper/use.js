import mongoose from "mongoose";

const WiperUsegSchema = mongoose.Schema({
    
    WiperUsageAr:String,
    WiperUsageEn:{ type: String , required: true},
    

})
const WiperUsegModule =mongoose.model('WiperUsage',WiperUsegSchema);

export default WiperUsegModule;