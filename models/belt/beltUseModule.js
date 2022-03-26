import mongoose from "mongoose";

const beltUsegSchema = mongoose.Schema({
    
    originatedAr:String,
    originatedEn:{ type: String , required: true},
    

})
const beltUsegModule =mongoose.model('originatedBelt',beltUsegSchema);

export default beltUsegModule;
