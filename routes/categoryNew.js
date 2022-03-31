import express  from "express";
import CategoryModule from "../models/category/categoryModule.js";
import slugify from "slugify";
const router = express.Router();

router.post('/category/create',(req,res)=>{

    const categoryObj={
        name:req.body.name,
        slug:slugify(req.body.name)
    } 
    if(req.body.parentID){

        categoryObj.parentID=req.body.parentID;
    }
    const cat = new CategoryModule(categoryObj);
    cat.save((error,category)=>{
     if(error) return res.status(400).json({error});
     if (category){
         return res.status(201).json({category});
     }
    });
});
function creatCategorys(category,parentID=null){
    const categoryList=[]
    let cate
    if(parentID==null){
        cate=category.filter(cat=>cat.parentID==undefined);
    }else{
        cate=category.filter(cat=>cat.parentID==parentID)
    }
    for(let cat of cate){
     categoryList.push({
         _id:cat._id,
         name:cat.name,
         slug:cat.slug,
         cheldren:creatCategorys(category,cat._id)
     })
    }
    return categoryList
}
router.get('/category/get',(req,res)=>{
    CategoryModule.find({})
    .exec((error,category)=>{
     if(error) return res.status(400).json({error});
     if (category){
         const categoryList =creatCategorys(category)
        return res.status(201).json({categoryList});
    }
    })
})



export default router;
