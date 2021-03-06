import express  from "express";
import VehiclesModule from "../models/vehicles/vehicles.js";
import ManufacturerModule from "../models/vehicles/Manufacturer .js";
import ModaleModule from "../models/vehicles/modale.js";
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
// ------------------------------ Post Api ------------------------------------------------------------------
    //  -------------------Manufacturer--------------

router.post('/Manufacturer/create',(req,res)=>{
         const {nameEn,nameAr,logo}=req.body;

    const product= new ManufacturerModule({
        nameEn:nameEn,
        nameAr:nameAr,
        logo:logo,

    });
    
    product.save(((error,product)=>{
        if(error) return res.status(400).json({error});
        if(product){
            res.status(201).json({product})
        }
    }))

});
    //  -------------------Vehicles--------------

router.post('/Vehicles/create',(req,res)=>{
    const {ModelYear,Fueltype,BodyNo,EngNo,EngVol,Notes,ModelImage,category,logo}=req.body;

const product= new VehiclesModule({

    ModelYear:ModelYear,
    Fueltype:Fueltype,
    BodyNo:BodyNo,
    EngNo:EngNo,
    EngVol:EngVol,
    Notes:Notes,
    logo:logo,
    ModelImage:ModelImage,
    category:category

});

product.save(((error,product)=>{
   if(error) return res.status(400).json({error});
   if(product){
       res.status(201).json({product})
   }
}))

});
    //  -------------------Modale--------------

router.post('/Modale/create',(req,res)=>{
    const {ModelEn,ModelAr,ModelLogo,category}=req.body;

const product= new ModaleModule({

    ModelEn:ModelEn,
    ModelAr:ModelAr,
    ModelLogo:ModelLogo,
    category:category

});

product.save(((error,product)=>{
   if(error) return res.status(400).json({error});
   if(product){
       res.status(201).json({product})
   }
}))

});
// ------------------------------ Get Api ------------------------------------------------------------------

    //  -------------------Manufacturer--------------

router.get('/Manufacturer/get/:id', function(req, res) {
  console.log(req.params.id)
  ManufacturerModule.findById(req.params.id)
  .then(result=>{
      res.status(200).json(result)
  })
   });

router.get('/Manufacturer/get/', function(req, res) {
    ManufacturerModule.find()
  .then(result=>{
      res.status(200).json(result)
  })

   });
    //  -------------------Vehicles--------------

   router.get('/Vehicles/get/:id', function(req, res) {

    try {
        console.log(req.params.id)
        VehiclesModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })   
    } catch (error) {
    res.send(error);
        
    }
     });
  
  router.post('/Vehicles/get/', function(req, res) {
    console.log(req.body.category)

    const cat = req.body.category
    VehiclesModule.find({category:cat})
    .then(result=>{
        res.status(200).json(result)
    }).catch(function(error) {
        if (error) {
            res.status(500).json(error);
          } else if (!cat) {
            res.status(404).json();      // This runs.
          }
        });
     });
    //  -------------------Modale--------------
     router.get('/Modale/get/:id', function(req, res) {
        console.log(req.params.id)
        ModaleModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });
      
      router.post('/Modale/get/', function(req, res) {
        console.log(req.body.category)

        const cat = req.body.category
        ModaleModule.find({category:cat})
        .then(result=>{
            res.status(200).json(result)
        }).catch(function(error) {
            if (error) {
                res.status(500).json(error);
              } else if (!cat) {
                res.status(404).json();      // This runs.
              }
            });
         });
// ------------------------------ Put Api ------------------------------------------------------------------
    //  -------------------Manufacturer--------------

   router.put("/Manufacturer/:id", async (req, res) => {
    try {
        const product = await ManufacturerModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(product);
    } catch (error) {
        res.send(error);
    }
});
    //  -------------------Vehicles--------------

    router.put("/Vehicles/:id", async (req, res) => {
        try {
            const product = await VehiclesModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(product);
        } catch (error) {
            res.send(error);
        }
    });
    //  -------------------Modale--------------
    router.put("/Modale/:id", async (req, res) => {
        try {
            const product = await ModaleModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(product).json(req.body);
        } catch (error) {
            res.send(error);
        }
    });
// ------------------------------ Delete Api ------------------------------------------------------------------

router.delete('/Manufacturer/:id',async(req,res)=>{
  const id = req.params.id;

try {
     await ManufacturerModule.findByIdAndRemove(id).exec();
     res.send('done')
} catch (error) {
    console.log(error)
}
}
)
    //  -------------------Vehicles--------------

router.delete('/Vehicles/:id',async(req,res)=>{
    const id = req.params.id;
  
  try {
       await VehiclesModule.findByIdAndRemove(id).exec();
       res.send('done')
  } catch (error) {
      console.log(error)
  }
  }
  )
    //  -------------------Modale--------------

  router.delete('/Modale/:id',async(req,res)=>{
    const id = req.params.id;
  
  try {
       await ModaleModule.findByIdAndRemove(id).exec();
       res.send('done')
  } catch (error) {
      console.log(error)
  }
  }
  )
export default router;
