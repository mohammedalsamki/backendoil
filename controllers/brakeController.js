import BrakeModule from "../models/BrakeModule/BrakeModule.js";
import brakeUsegModule from "../models/BrakeModule/BrakeUsageModule.js";

export const getbrake= async (req,res)=>{
    try {
        const allbrake=await BrakeModule.find();
        res.status(200).json(allbrake);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getbrakeUsage= async (req,res)=>{
    try {
        const allbrakeUsage=await brakeUsegModule.find();
        res.status(200).json(allbrakeUsage);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deletebrake=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await BrakeModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deletebrakeUsage=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await brakeUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }