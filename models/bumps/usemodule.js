import mongoose from "mongoose";

const pumpsUsegSchema = mongoose.Schema({
    
    pumpsUsageAr:String,
    pumpsUsageEn:{ type: String , required: true},
    

})
const pumpsUsegModule =mongoose.model('pumpsUse',pumpsUsegSchema);

export default pumpsUsegModule;