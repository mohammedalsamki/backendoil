import sparkModule from "../models/spark/sparkModule.js";
import sparkUsegModule from "../models/spark/sparkUsegModule.js";

export const getspark= async (req,res)=>{
    try {
        const allspark=await sparkModule.find();
        res.status(200).json(allspark);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getoriginated= async (req,res)=>{
    try {
        const alloriginated=await sparkUsegModule.find();
        res.status(200).json(alloriginated);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const deletespark=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await sparkModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteoriginated=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await sparkUsegModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }