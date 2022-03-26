import beltModule from "../models/belt/beltModule.js";
import beltUseModule from "../models/belt/beltUseModule.js";

export const getbelt= async (req,res)=>{
    try {
        const allbelt=await beltModule.find();
        res.status(200).json(allbelt);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getoriginated= async (req,res)=>{
    try {
        const alloriginated=await beltUseModule.find();
        res.status(200).json(alloriginated);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deletebelt=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await beltModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteoriginated=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await beltUseModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }