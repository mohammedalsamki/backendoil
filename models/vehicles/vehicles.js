import mongoose from 'mongoose';

const VehiclesSchema = new mongoose.Schema({
    ModelYear:[],
    Fueltype:String,
    EngVol:String,
    BodyNo:String,
    EngNo:String,
    Notes:String,
    ModelImage:String,
    category:{type:mongoose.Schema.Types.ObjectId,ref:'ModaleTable'},
},{timestamps:true});

const VehiclesModule =mongoose.model('Vehicles',VehiclesSchema);
export default VehiclesModule;