import mongoose from "mongoose";

const sparkUsegSchema = mongoose.Schema({
    
    originatedAr:String,
    originatedEn:{ type: String , required: true},
    

})
const sparkUsegModule =mongoose.model('originated',sparkUsegSchema);

export default sparkUsegModule;
