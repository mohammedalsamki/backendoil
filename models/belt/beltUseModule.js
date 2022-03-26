import mongoose from "mongoose";

const beltUsegSchema = mongoose.Schema({
    
    originatedAr:String,
    originatedEn:{ type: String , required: true},
    

})
const beltUsegModule =mongoose.model('originated',beltUsegSchema);

export default beltUsegModule;
