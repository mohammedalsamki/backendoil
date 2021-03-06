import express  from "express";
import ProductModule from "../models/products/products.js";
import multer from "multer";

const router = express.Router();
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  router.put("/spec/:id", async (req, res) => {

    var querynew = req.body.vehicles;
    console.log("test test",querynew)
    try {
      await ProductModule.findByIdAndUpdate(req.params.id,{

        $addToSet:{
         vehicles: querynew
        }
   
               }).then(
                   res.send("This spec has  been saved")
           
                ) 
  } catch (error) {
    res.send(error);

  }

   
});
router.get('/post', (req, res) => {
  res.send('Hello World, from express');
});
router.post("/specDelete/", async (req, res) => {
    let ID =req.body.id;
    let querynew = req.body.vehicles;
    // var querySpec= req.body.SpecsChiled;
    console.log("test test",querynew)

    try {
      await ProductModule.findByIdAndUpdate(ID,{

        $pull:{
         vehicles: querynew
        }
   
               }).then(
                   res.send("This spec has been Deleted")
           
                ) 
    } catch (error) {
      res.send(error);

    }

   
});
  
  const upload = multer({ storage: storage })

router.post('/product/create',(req,res)=>{
         const {BrandID,BrandName,vehicles,category,Note,BrandPartNumber,OEMPartNumber,ItemImage}=req.body;

    const product= new ProductModule({
        BrandID:BrandID,
        BrandName:BrandName,
        vehicles:vehicles,
        category:category,
        Note:Note,
        BrandPartNumber:BrandPartNumber,
        OEMPartNumber:OEMPartNumber,
        ItemImage:ItemImage,
    });
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error});
        if(product){
            res.status(201).json({product})
        }
    }))

});
router.get('/product/get/:id', function(req, res) {
  try {
    console.log(req.params.id)
    ProductModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
  } catch (error) {
    res.send(error);
    
  }

   });
   router.post('/product/cat/', function(req, res) {
    console.log(req.params.id)
    const cat = req.body.category
    ProductModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    }).catch(function(error) {
        if (error) {
            res.status(500).json(error);
          } else if (cat.length != 24) {
            res.status(404).json();      // This runs.
          }
        });
     });
     router.post('/product/brand/', function(req, res) {
        const BrandName = req.body.BrandName
        const cat = req.body.category

        ProductModule.find({BrandName:BrandName,category:cat})
        .then(result=>{
            res.status(200).json(result)
        }).catch(function(error) {
            if (error) {
                res.status(500).json(error);
              } else if (cat.length != 24) {
                res.status(404).json();      // This runs.
              }
            });
         });

router.get('/product/get/', function(req, res) {
  res.send('Hello World, from express?');

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
