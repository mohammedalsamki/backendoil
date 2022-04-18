import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    BrandID:{type:mongoose.Schema.Types.ObjectId,ref:'Brand'},
    BrandName:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'PartName'},
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    ItemImage:String,
    updatedAt:Date,
    vehicles:[{type:mongoose.Schema.Types.ObjectId,ref:'Vehicles'}]
},{timestamps:true});

const ProductModule =mongoose.model('ProductLast',ProductSchema);
export default ProductModule;