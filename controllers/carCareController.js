import carCareModule from "../models/carCare/carCareUsgeModule.js";
import carCareUsegModule from "../models/carCare/carCareUsgeModule.js";

export const getcarCare= async (req,res)=>{
    try {
        const allcarCare=await carCareModule.find();
        res.status(200).json(allcarCare);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getcarCareUsage= async (req,res)=>{
    try {
        const allcarCareUsage=await carCareUsegModule.find();
        res.status(200).json(allcarCareUsage);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deletecarCare=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await carCareModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deletecarCareUsage=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await carCareUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }