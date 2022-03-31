import express  from "express";
import CategoryModule from "../models/category/categoryModule.js";
import ProductModule from "../models/products/products.js";
import slugify from "slugify";
import multer from "multer";
import shortid from "shortid";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/product/create',upload.single('ItemImage'),(req,res)=>{
         const {name,nameAr,Brand,category,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,StockNumber,MinQty}=req.body;
         let ItemImage=[]
         if(req.file.length>0){
            ItemImage=req.file.map(file=>{
                return { img: file.filename }
            });
         }
    const product= new ProductModule({
        name:name,
        nameAr:nameAr,
        slug:slugify(name),
        Brand:Brand,
        category:category,
        StockQuantity:StockQuantity,
        UnitPrice:UnitPrice,
        SaelsPrice:SaelsPrice,
        Note:Note,
        BrandPartNumber:BrandPartNumber,
        OEMPartNumber:OEMPartNumber,
        StockNumber:StockNumber,
        ItemImage:ItemImage,
        MinQty:MinQty
    });
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error});
        if(product){
            res.status(201).json({product})
        }
    }))

});
// function creatCategorys(category,parentID=null){
//     const categoryList=[]
//     let cate
//     if(parentID==null){
//         cate=category.filter(cat=>cat.parentID==undefined);
//     }else{
//         cate=category.filter(cat=>cat.parentID==parentID)
//     }
//     for(let cat of cate){
//      categoryList.push({
//          _id:cat._id,
//          name:cat.name,
//          slug:cat.slug,
//          cheldren:creatCategorys(category,cat._id)
//      })
//     }
//     return categoryList
// }
// router.get('/category/get',(req,res)=>{
//     CategoryModule.find({})
//     .exec((error,category)=>{
//      if(error) return res.status(400).json({error});
//      if (category){
//          const categoryList =creatCategorys(category)
//         return res.status(201).json({categoryList});
//     }
//     })
// })



export default router;
