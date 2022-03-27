import lampsModule from "../models/lamps/lampsModel.js";
import lampsUsegModule from "../models/lamps/lampsUsgeModule.js";
import EStanderModule from "../models/lamps/Estander.js";

export const getlamps= async (req,res)=>{
    try {
        const alllamps=await lampsModule.find();
        res.status(200).json(alllamps);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getEStander= async (req,res)=>{
    try {
        const alllamps=await EStanderModule.find();
        res.status(200).json(alllamps);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getlampsUsage= async (req,res)=>{
    try {
        const alllampsUsage=await lampsUsegModule.find();
        res.status(200).json(alllampsUsage);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deletelamps=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await lampsModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteEStander=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await EStanderModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deletelampsUsage=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await lampsUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }