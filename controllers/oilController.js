import OilModule from "../models/oilModel.js";
import OilUsegModule from "../models/oilUsgeModule.js";
import BrandModule from "../models/brandModules.js";
import OilGradeModule from "../models/oilGradeModule.js";
import CapacityModule from "../models/capacityModules.js";

export const getOil= async (req,res)=>{
    try {
        const allOil=await OilModule.find();
        res.status(200).json(allOil);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getOilUsge= async (req,res)=>{
    try {
        const allOilUsge=await OilUsegModule.find();
        res.status(200).json(allOilUsge);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getBrand= async (req,res)=>{
    try {
        const allBrands=await BrandModule.find();
        res.status(200).json(allBrands);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getOilGrade= async (req,res)=>{
    try {
        const allOilGrade=await OilGradeModule.find();
        res.status(200).json(allOilGrade);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const getCapacity= async (req,res)=>{
    try {
        const allCapacity=await CapacityModule.find();
        res.status(200).json(allCapacity);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const deleteOilUsge =async (req,res)=>{
     const id = req.params.id;

   try {
        await OilUsegModule.findByIdAndRemove(id).exec();
        res.send('done')
   } catch (error) {
       console.log(error)
   }
}

export const deleteOil =async (req,res)=>{
   const id = req.params.id;

   try {
        await OilModule.findByIdAndRemove(id).exec();
        res.send('done')
   } catch (error) {
       console.log(error)
   }
}
export const deleteBrand =async (req,res)=>{
    const id = req.params.id;
 
    try {
         await BrandModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteOilGrade=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await OilGradeModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }
 export const deleteCapacity=async (req,res)=>{
    const id = req.params.id;
 
    try {
         await CapacityModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 }


