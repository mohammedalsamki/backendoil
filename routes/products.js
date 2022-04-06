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

router.post('/product/create',(req,res)=>{
         const {name,nameAr,usedFor,Brand,category,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,StockNumber,MinQty,ItemImage}=req.body;

    const product= new ProductModule({
        name:name,
        nameAr:nameAr,
        usedFor:usedFor,
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
router.get('/product/get/:id', function(req, res) {
  console.log(req.params.id)
  ProductModule.findById(req.params.id)
  .then(result=>{
      res.status(200).json(result)
  })
   });
   router.post('/product/cat/', function(req, res) {
    console.log(req.params.id)
    const cat = req.body.category
    ProductModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/product/get/', function(req, res) {
  console.log(req.params.id)
  ProductModule.find()
  .then(result=>{
      res.status(200).json(result)
  })
   });

   router.put("/:id", async (req, res) => {
    try {
        const product = await ProductModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(product);
    } catch (error) {
        res.send(error);
    }
});

router.delete('/:id',async(req,res)=>{
  const id = req.params.id;

try {
     await ProductModule.findByIdAndRemove(id).exec();
     res.send('done')
} catch (error) {
    console.log(error)
}
}
)
export default router;
