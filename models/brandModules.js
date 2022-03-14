import mongoose from "mongoose";

const oilUsegSchema = mongoose.Schema({
    
    BrandAr:String,
    BrandEn:String,

})
const BrandModule =mongoose.model('Brand',oilUsegSchema);

export default BrandModule;
