import mongoose from "mongoose";

const carCareUsegSchema = mongoose.Schema({
    
    carCareUsageAr:String,
    carCareUsageEn:{ type: String , required: true},
    Specs:[String]

})
const carCareUsegModule =mongoose.model('carCareUsge',carCareUsegSchema);

export default carCareUsegModule;
