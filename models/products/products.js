import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({


    Brand:{type:mongoose.Schema.Types.ObjectId,ref:'Brand'},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'PartName'},
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    ItemImage:String,
    updatedAt:Date,
    vehicles:{
        model:String,
        year:[]
    }


},{timestamps:true});



const ProductModule =mongoose.model('ProductLast',ProductSchema);
export default ProductModule;