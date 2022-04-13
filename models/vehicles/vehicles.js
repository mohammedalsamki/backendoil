import mongoose from 'mongoose';

const VehiclesSchema = new mongoose.Schema({
    ModelYear:Number,
    Fueltype:String,
    EngineSpecs:String,
    ModelImage:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'ModaleTable'},
},{timestamps:true});

const VehiclesModule =mongoose.model('Vehicles',VehiclesSchema);
export default VehiclesModule;