import express  from "express";
import CartModule from "../models/cart.js";
import slugify from "slugify";
const router = express.Router();

router.post('/cart/create',(req,res)=>{
    const cart = new CartModule({
        cartItem:req.body.cartItem,

    })
    cart.save((error,cart)=>{
        if(error) return res.status(400).json({error});
        if(cart){
            return res.status(201).json(cart)
        }
    })
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
router.get('/cart/get',(req,res)=>{
    CartModule.find({})
    .exec((error,category)=>{
     if(error) return res.status(400).json({error});
     if (category){
         const categoryList =creatCategorys(category)
        return res.status(201).json({categoryList});
    }
    })
})



export default router;
