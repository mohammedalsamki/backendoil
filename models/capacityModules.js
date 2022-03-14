import mongoose from "mongoose";

const capacitySchema = mongoose.Schema({
    
    capacityName:String,
    capacityNumber:Number,


})
const CapacityModule =mongoose.model('capacity',capacitySchema);

export default CapacityModule;
