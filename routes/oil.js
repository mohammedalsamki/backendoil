import express  from "express";
import { getOil,deleteOil,getOilUsge,deleteOilUsge,getBrand,deleteBrand,getUnit,deleteUnit, } from "../controllers/oilController.js";
import OilModule from "../models/oilModel.js";
import OilUsegModule from "../models/oilUsgeModule.js";
import BrandModule from "../models/brandModules.js";
import UnitModule from "../models/unitModule.js";
import multer  from "multer";


const router = express.Router();
const app= express();

const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'./public');
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`;
        cb(null, fileName);
      },
});
const upload = multer({ storage }).single('ItemImage');

router.get('/',getOil);
router.get('/oilUseg',getOilUsge);
router.get('/brand',getBrand);
router.get('/unit',getUnit);


router.get('/tours/:id', function(req, res) {
console.log(req.params.id)
OilUsegModule.findById(req.params.id)
.then(result=>{
    res.status(200).json(result)
})
 });


router.post('/uploade',upload,(req,res)=>{
    const {file}=req;
    res.send({
        file:file.originalname,
        path:file.path
    })
})
router.post("/",upload,async (req,res)=>{
    const {OilUsage,Brand,Capasity,OilGrade,Unit,UnitPrice,StockQuantiti,SaelsPrice,Note,BrandPartNumber,StockNumber,MinQty,ItemImage,OEMPartNumber}=req.body
    const {file}=req;
    console.log(req.body)
    let oildata =  new OilModule({
        OilUsage:OilUsage,
        Brand:Brand,
        Capasity:Capasity,
        OilGrade:OilGrade,
        Unit:Unit,
        UnitPrice:UnitPrice,
        StockQuantiti:StockQuantiti,
        SaelsPrice:SaelsPrice,
        Note:Note,
        BrandPartNumber:BrandPartNumber,
        OEMPartNumber:OEMPartNumber,
        StockNumber:StockNumber,
        ItemImage: ItemImage,
        MinQty:MinQty
    })
     oildata.save()
     console.log({file})
     res.send(oildata.ItemImage)
})
router.post('/oilUseg', (req, res, next) => {
 
    var query = req.body.OilUsageEn; //Extract title from input form
    OilUsegModule.findOne({OilUsageEn:query}, function(err, example){
        if(err) console.log(err);
        if ( example){
            
            console.log("This OilUsageEn has already been saved");
            res.send("This OilUsageEn has already been saved")

        } else {
            
 
            var example = new OilUsegModule(req.body);
            example.save(function(err, example) {
                if(err) console.log(err);
                console.log("New OilUsageEn created");
                res.send("New OilUsageEn created")
            });
        }
    });
});


router.post("/brand",async (req,res)=>{
    const {BrandAr,BrandEn,BrandImage,BrandDiscr}=req.body

    let branddata =  new BrandModule({
        BrandAr:BrandAr,
        BrandEn:BrandEn,
        BrandImage:BrandImage,
        BrandDiscr:BrandDiscr
    })
    branddata.save()
     res.send(branddata)
})



router.post("/unit",async (req,res)=>{
    const {UnitNameEn,UnitNameAr}=req.body

    let oilUnit =  new UnitModule({
        UnitNameEn:UnitNameEn,
        UnitNameAr:UnitNameAr
    })
    oilUnit.save()
     res.send(oilUnit)
})
router.delete('/:id',deleteOil);
router.delete('/oilUseg/:id',deleteOilUsge);
router.delete('/brand/:id',deleteBrand);
router.delete('/unit/:id',deleteUnit);


router.put("/:id", async (req, res) => {
    try {
        const brand = await OilModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(brand);
    } catch (error) {
        res.send(error);
    }
});

router.put("/brand/:id", async (req, res) => {
    try {
        const brand = await BrandModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(brand);
    } catch (error) {
        res.send(error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const brand = await OilModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(brand);
    } catch (error) {
        res.send(error);
    }
});
router.put("/oilUseg/:id", async (req, res) => {
    var query = req.body.OilUsageEn; //Extract title from input form
    OilUsegModule.findOne({OilUsageEn:query}, function(err, example){
        if(err) console.log(err);
        if ( example){
            
            console.log("This OilUsageEn has already been saved");
            res.send("This OilUsageEn has already been saved")

        } else {
 
            if (!req.body) {
                return res.status(400).send({
                  message: "Data to update can not be empty!"
                });
              }
              const id = req.params.id;
              OilUsegModule.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
                .then(data => {
                  if (!data) {
                    res.status(404).send({
                      message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                    });
                  } else res.send({ message: "Tutorial was updated successfully." });
                })
                .catch(err => {
                  res.status(500).send({
                    message: "Error updating Tutorial with id=" + id
                  });
                });
        }
    });
    
});
router.put("/spec/:id", async (req, res) => {

    var querynew = req.body.OilUsageEn;
    var querySpec= req.body.Specs;
    console.log("test test",querySpec)

    await OilUsegModule.findOneAndUpdate({OilUsageEn:querynew},{

     $addToSet:{
        Specs: querySpec
     }

            }).then(
                res.send("This spec has  been saved")
        
             ) 
});
router.put("/specDelete/:id", async (req, res) => {

    var querynew = req.body.OilUsageEn;
    var querySpec= req.body.SpecsChiled;
    console.log("test test",querySpec)

    await OilUsegModule.findOneAndUpdate({OilUsageEn:querynew},{

     $pull:{
        Specs: querySpec
     }

            }).then(
                res.send("This spec has  been Deleted")
        
             ) 
});

router.put("/unit/:id", async (req, res) => {
    try {
        const unit = await UnitModule.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(unit);
    } catch (error) {
        res.send(error);
    }
});








export default router;