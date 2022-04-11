import mongoose from 'mongoose';

const PartNameSchema = new mongoose.Schema({

    nameEN:String,
    nameAr:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'CategoryMain'},
    ItemImage:String,


},{timestamps:true});



const PartNameModule =mongoose.model('PartName',PartNameSchema);
export default PartNameModule;