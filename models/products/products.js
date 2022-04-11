import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({


    Brand:String,
    usedFor:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'PartName'},
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    StockNumber:String,
    ItemImage:String,
    MinQty:Number,
    updatedAt:Date


},{timestamps:true});



const ProductModule =mongoose.model('ProductLast',ProductSchema);
export default ProductModule;