import mongoose from "mongoose";

const brakeUsegSchema = mongoose.Schema({
    
    brakeUsageAr:String,
    brakeUsageEn:{ type: String , required: true},
    

})
const brakeUsegModule =mongoose.model('brakeUsage',brakeUsegSchema);

export default brakeUsegModule;
