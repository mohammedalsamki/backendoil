import mongoose from "mongoose";

const oilGradeSchema = mongoose.Schema({
    
    OilGradeName:String,
    OilGradeDis:String,


})
const OilGradeModule =mongoose.model('OilGrade',oilGradeSchema);

export default OilGradeModule;
