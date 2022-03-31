import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({

    // name:{type:String,required:true,trim:true},
    // slug :{type:String,required:true,unique:true},

    cartItem:{
        product :{type:mongoose.Schema.Types.ObjectId,ref:'Peoduct',required:true},
        quantity:{type:Number,default:1}
    }



},{timestamps:true});



const CartModule =mongoose.model('Cart',CartSchema);
export default CartModule;