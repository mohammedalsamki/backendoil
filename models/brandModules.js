import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    
    BrandAr:String,
    BrandEn:String,
    BrandImage:String,
    BrandDiscr:String

})
const BrandModule =mongoose.model('Brand',brandSchema);

export default BrandModule;
