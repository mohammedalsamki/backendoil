import mongoose from 'mongoose';

const ManufacturerSchema = new mongoose.Schema({
    nameEn:String,
    nameAr:String,
    logo:String
},{timestamps:true});

const ManufacturerModule =mongoose.model('Manufacturer',ManufacturerSchema);
export default ManufacturerModule;