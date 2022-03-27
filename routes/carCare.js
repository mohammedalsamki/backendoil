import express  from "express";
import { getcarCare,deletecarCare,getcarCareUsage,deletecarCareUsage } from "../controllers/carCareController.js";
import carCareModule from "../models/carCare/carCareModel.js";
import carCareUsegModule from "../models/carCare/carCareUsgeModule.js";


const router = express.Router();
const app= express();

router.get('/carCare',getcarCare);
router.get('/carCare/usage',getcarCareUsage);
router.delete('/carCare/:id',deletecarCare);
router.delete('/carCare/usage/:id',deletecarCareUsage);

router.get('/carCare/:id', function(req, res) {
    console.log(req.params.id)
    carCareModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/carCare/usage/:id', function(req, res) {
        console.log(req.params.id)
        carCareUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/carCare",async (req,res)=>{
        const {carCareUsage,Brand,StockQuantiti,UnitPrice,SaelsPrice,Note,BrandPartNumber,StockNumber,ItemImage,MinQty,OEMPartNumber,Unit}=req.body
    
        let carCareData =  new carCareModule({
            carCareUsage:carCareUsage,
            Brand:Brand,
            Unit:Unit,
            StockQuantiti:StockQuantiti,
            UnitPrice:UnitPrice,
            SaelsPrice:SaelsPrice,
            Note:Note,
            BrandPartNumber:BrandPartNumber,
            OEMPartNumber:OEMPartNumber,
            StockNumber:StockNumber,
            ItemImage:ItemImage,
            MinQty:MinQty
    
        })
        carCareData.save()
         res.send(carCareData)
    })

router.post("/carCare/usage",async (req,res)=>{
        const {carCareUsageAr,carCareUsageEn}=req.body
    
        let carCareData =  new carCareUsegModule({
            carCareUsageAr:carCareUsageAr,
            carCareUsageEn:carCareUsageEn
    
        })
        carCareData.save()
         res.send(carCareData)
    })

    router.put("/carCare/:id", async (req, res) => {
        try {
            const carCare = await carCareModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(carCare);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/carCare/usage/:id", async (req, res) => {
        try {
            const carCare = await carCareUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(carCare);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
