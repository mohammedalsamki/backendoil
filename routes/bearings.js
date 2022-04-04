import express  from "express";
import BearingsModule from "../models/Bearings/bearings.js";
import BearingsUsegModule from "../models/Bearings/use.js";
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
    const {BearingsUsageAr,BearingsUsageEn}=req.body;
    const use=new BearingsUsegModule({
        BearingsUsageAr:BearingsUsageAr,
        BearingsUsageEn:BearingsUsageEn
    });
    use.save(((error,use)=>{
        if(error) return res.status(400).json({error});
        if(use){
            res.status(201).json({use});
        }
    }))
})

router.post('/Bearings/create',(req,res)=>{
         const {Brand,category,usedFor,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,StockNumber,MinQty,ItemImage}=req.body;

    const Bearings= new BearingsModule({

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
    Bearings.save(((error,Bearings)=>{
        if(error) return res.status(400).json({error});
        if(Bearings){
            res.status(201).json({Bearings})
        }
    }))

});
router.get('/use/get/:id', function(req, res) {
    console.log(req.params.id)
    BearingsUsegModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });
router.get('/Bearings/get/:id', function(req, res) {
  console.log(req.params.id)
  BearingsModule.findById(req.params.id)
  .then(result=>{
      res.status(200).json(result)
  })
   });
   router.get('/Bearings/cat/', function(req, res) {
    console.log(req.params.id)
    const cat = req.body.category
    BearingsModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/Bearings/get/', function(req, res) {
  console.log(req.params.id)
  BearingsModule.find()
  .then(result=>{
      res.status(200).json(result)
  })
   });

   router.get('/use/get/', function(req, res) {
    console.log(req.params.id)
    BearingsUsegModule.find()
    .then(result=>{
        res.status(200).json(result)
    })
     });

   router.put("/:id", async (req, res) => {
    try {
        const Bearings = await BearingsModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(Bearings);
    } catch (error) {
        res.send(error);
    }
});
router.put("/use/:id", async (req, res) => {
    try {
        const Bearings = await BearingsUsegModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(Bearings);
    } catch (error) {
        res.send(error);
    }
});
router.delete('/:id',async(req,res)=>{
  const id = req.params.id;

try {
     await BearingsModule.findByIdAndRemove(id).exec();
     res.send('done')
} catch (error) {
    console.log(error)
}})
router.delete('/use/:id',async(req,res)=>{
    const id = req.params.id;
  
  try {
       await BearingsUsegModule.findByIdAndRemove(id).exec();
       res.send('done')
  } catch (error) {
      console.log(error)
  }})
export default router;
