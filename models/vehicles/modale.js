import mongoose from 'mongoose';

const ModaleSchema = new mongoose.Schema({

    ModelEn:String,
    ModelAr:String,
    ModelLogo:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Manufacturer'},
},{timestamps:true});

const ModaleModule =mongoose.model('ModaleTable',ModaleSchema);
export default ModaleModule;