import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    slug :{type:String,required:true,unique:true},
    parentID:{
        type:String,
    }


},{timestamps:true});



const CategoryModule =mongoose.model('CategoryMain',CategorySchema);
export default CategoryModule;