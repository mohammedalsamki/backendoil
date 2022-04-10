import WiperModule from "../models/wiper/wiper.js";
import WiperUsegModule from "../models/wiper/use.js";

export const getWiper= async (req,res)=>{
    try {
        const allWiper=await WiperModule.find();
        res.status(200).json(allWiper);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getWiperUsage= async (req,res)=>{
    try {
        const allWiperUsage=await WiperUsegModule.find();
        res.status(200).json(allWiperUsage);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deleteWiper=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await WiperModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteWiperUsage=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await WiperUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }