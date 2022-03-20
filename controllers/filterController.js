import FilterModule from "../models/FilterModule.js";
import FilterUsegModule from "../models/filterUsageModule.js";

export const getFilter= async (req,res)=>{
    try {
        const allFilter=await FilterModule.find();
        res.status(200).json(allFilter);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getFilterUsage= async (req,res)=>{
    try {
        const allFilterUsage=await FilterUsegModule.find();
        res.status(200).json(allFilterUsage);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deleteFilter=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await FilterModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteFilterUsage=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await FilterUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }