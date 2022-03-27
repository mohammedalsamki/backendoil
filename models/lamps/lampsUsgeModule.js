import mongoose from "mongoose";

const lampsUsegSchema = mongoose.Schema({
    
    lampsUsageAr:String,
    lampsUsageEn:{ type: String , required: true},

})
const lampsUsegModule =mongoose.model('lampsUsge',lampsUsegSchema);

export default lampsUsegModule;
