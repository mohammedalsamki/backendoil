import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    nameAr:{type:String,required:true,trim:true},
    slug :{type:String,required:true,unique:true},
    Brand:[{
        BrandId:{type:mongoose.Schema.Types.ObjectId,ref:'Brand'},
        name:String
    }],
    category:{type:mongoose.Schema.Types.ObjectId,ref:'CategoryMain'},
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    StockNumber:String,
    ItemImage:[
        {img:{type:String}}
    ],
    MinQty:Number,
    updatedAt:Date


},{timestamps:true});



const ProductModule =mongoose.model('Peoduct',ProductSchema);
export default ProductModule;