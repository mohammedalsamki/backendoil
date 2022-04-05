import express  from "express";
import SuspentionsModule from "../models/suspention/susModule.js";
import SuspentionsUsegModule from "../models/suspention/use.js";
// import slugify from "slugify";
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
    const {SuspentionsUsageAr,SuspentionsUsageEn}=req.body;
    const use=new SuspentionsUsegModule({
        SuspentionsUsageAr:SuspentionsUsageAr,
        SuspentionsUsageEn:SuspentionsUsageEn
    });
    use.save(((error,use)=>{
        if(error) return res.status(400).json({error});
        if(use){
            res.status(201).json({use});
        }
    }))
})

router.post('/Suspentions/create',(req,res)=>{
         const {Brand,category,usedFor,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,StockNumber,MinQty,ItemImage}=req.body;

    const Suspentions= new SuspentionsModule({

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
    Suspentions.save(((error,Suspentions)=>{
        if(error) return res.status(400).json({error});
        if(Suspentions){
            res.status(201).json({Suspentions})
        }
    }))

});
router.get('/use/get/:id', function(req, res) {
    console.log(req.params.id)
    SuspentionsUsegModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });
router.get('/Suspentions/get/:id', function(req, res) {
  console.log(req.params.id)
  SuspentionsModule.findById(req.params.id)
  .then(result=>{
      res.status(200).json(result)
  })
   });
   router.get('/Suspentions/cat/', function(req, res) {
    console.log(req.params.id)
    const cat = req.body.category
    SuspentionsModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/Suspentions/get/', function(req, res) {
  console.log(req.params.id)
  SuspentionsModule.find()
  .then(result=>{
      res.status(200).json(result)
  })
   });

   router.get('/use/get/', function(req, res) {
    console.log(req.params.id)
    SuspentionsUsegModule.find()
    .then(result=>{
        res.status(200).json(result)
    })
     });

   router.put("/:id", async (req, res) => {
    try {
        const Suspentions = await SuspentionsModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(Suspentions);
    } catch (error) {
        res.send(error);
    }
});
router.put("/use/:id", async (req, res) => {
    try {
        const Suspentions = await SuspentionsUsegModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(Suspentions);
    } catch (error) {
        res.send(error);
    }
});
router.delete('/:id',async(req,res)=>{
  const id = req.params.id;

try {
     await SuspentionsModule.findByIdAndRemove(id).exec();
     res.send('done')
} catch (error) {
    console.log(error)
}})
router.delete('/use/:id',async(req,res)=>{
    const id = req.params.id;
  
  try {
       await SuspentionsUsegModule.findByIdAndRemove(id).exec();
       res.send('done')
  } catch (error) {
      console.log(error)
  }})
export default router;
