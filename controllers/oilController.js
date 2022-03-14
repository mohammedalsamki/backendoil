import OilModule from "../models/oilModel.js";
import OilUsegModule from "../models/oilUsgeModule.js";
import BrandModule from "../models/brandModules.js";


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
export const createOil =async (req,res)=>{
    // res.send('Router is working');
    const oil= req.body;

    const newOil = new OilModule(oil);
    try {
       await newOil.save();
       res.status(201).json(newOil);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const deleteOilUsge =async (req,res)=>{
    OilUsegModule.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log('hi')
            res.redirect("done");
        } else {
            res.redirect("try again");
        }
     });
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
 


