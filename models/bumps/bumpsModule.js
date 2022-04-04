import mongoose from 'mongoose';

const bumpsSchema = new mongoose.Schema({

    // name:{type:String,required:true,trim:true},
    // nameAr:{type:String,required:true,trim:true},
    // slug :{type:String,required:true,unique:true},
    // Brand:{type:mongoose.Schema.Types.ObjectId,ref:'Brand'},
    Brand:String,
    usedFor:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'CategoryMain'},
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



const bumpsModule =mongoose.model('bumps',bumpsSchema);
export default bumpsModule;