import mongoose from "mongoose";

const EStanderSchema = mongoose.Schema({
    
    EStanderAr:String,
    EStanderEn:{ type: String , required: true},

})
const EStanderModule =mongoose.model('EStander',EStanderSchema);

export default EStanderModule;