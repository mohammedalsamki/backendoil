import express  from "express";
import bumpsModule from "../models/bumps/bumpsModule.js";
import pumpsUsegModule from "../models/bumps/usemodule.js";
import slugify from "slugify";
import multer from "multer";


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
router.post('/use',(req,res)=>{
    const {pumpsUsageAr,pumpsUsageEn}=req.body;
    const use=new pumpsUsegModule({
        pumpsUsageAr:pumpsUsageAr,
        pumpsUsageEn:pumpsUsageEn
    });
    use.save(((error,use)=>{
        if(error) return res.status(400).json({error});
        if(use){
            res.status(201).json({use});
        }
    }))
})

router.post('/bumps/create',(req,res)=>{
         const {Brand,category,usedFor,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,StockNumber,MinQty,ItemImage}=req.body;

    const bumps= new bumpsModule({
        // name:name,
        // nameAr:nameAr,
        // slug:slugify(name),
        Brand:Brand,
        category:category,
        usedFor:usedFor,
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
    bumps.save(((error,bumps)=>{
        if(error) return res.status(400).json({error});
        if(bumps){
            res.status(201).json({bumps})
        }
    }))

});
router.get('/use/get/:id', function(req, res) {
    console.log(req.params.id)
    pumpsUsegModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });
router.get('/bumps/get/:id', function(req, res) {
  console.log(req.params.id)
  bumpsModule.findById(req.params.id)
  .then(result=>{
      res.status(200).json(result)
  })
   });
   router.get('/bumps/cat/', function(req, res) {
    console.log(req.params.id)
    const cat = req.body.category
    bumpsModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/bumps/get/', function(req, res) {
  console.log(req.params.id)
  bumpsModule.find()
  .then(result=>{
      res.status(200).json(result)
  })
   });

   router.get('/use/get/', function(req, res) {
    console.log(req.params.id)
    pumpsUsegModule.find()
    .then(result=>{
        res.status(200).json(result)
    })
     });

   router.put("/:id", async (req, res) => {
    try {
        const bumps = await bumpsModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(bumps);
    } catch (error) {
        res.send(error);
    }
});
router.put("/use/:id", async (req, res) => {
    try {
        const bumps = await pumpsUsegModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(bumps);
    } catch (error) {
        res.send(error);
    }
});
router.delete('/:id',async(req,res)=>{
  const id = req.params.id;

try {
     await bumpsModule.findByIdAndRemove(id).exec();
     res.send('done')
} catch (error) {
    console.log(error)
}})
router.delete('/use/:id',async(req,res)=>{
    const id = req.params.id;
  
  try {
       await pumpsUsegModule.findByIdAndRemove(id).exec();
       res.send('done')
  } catch (error) {
      console.log(error)
  }})
export default router;
