import CapacityModule from "../models/capacityModules.js";
import slugify from "slugify";

export const addCategory =(req,res)=>{

    const categoryObj={
        name:req.body.name,
        slug:slugify(req.body.name)
    } 
    if(req.body.parentID){

        categoryObj.parentID=req.body.parentID;
    }
    const cat = new CapacityModule(categoryObj);
    cat.save((error,category)=>{
     if(error) return res.status(400).json({error});
     if (category){
         return res.status(201).json({category});
     }
    });
};