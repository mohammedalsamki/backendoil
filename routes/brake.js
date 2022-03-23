import express  from "express";
import { getbrake,deletebrake,getbrakeUsage,deletebrakeUsage } from "../controllers/brakeController.js";
import BrakeModule from "../models/BrakeModule/BrakeModule.js";
import brakeUsegModule from "../models/BrakeModule/BrakeUsageModule.js";


const router = express.Router();
const app= express();

router.get('/brake',getbrake);
router.get('/brake/usage',getbrakeUsage);
router.delete('/brake/:id',deletebrake);
router.delete('/brake/usage/:id',deletebrakeUsage);

router.get('/brake/:id', function(req, res) {
    console.log(req.params.id)
    BrakeModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/brake/usage/:id', function(req, res) {
        console.log(req.params.id)
        brakeUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/brake",async (req,res)=>{
        const {brakeUsage,Brand,StockQuantity,UnitPrice,SaelsPrice,Note,PartNumber,StockNumber,ItemImage,MinQty}=req.body
    
        let brakeData =  new BrakeModule({
            brakeUsage:brakeUsage,
            Brand:Brand,
            StockQuantity:StockQuantity,
            UnitPrice:UnitPrice,
            SaelsPrice:SaelsPrice,
            Note:Note,
            PartNumber:PartNumber,
            StockNumber:StockNumber,
            ItemImage:ItemImage,
            MinQty:MinQty
    
        })
        brakeData.save()
         res.send(brakeData)
    })

router.post("/brake/usage",async (req,res)=>{
        const {brakeUsageAr,brakeUsageEn}=req.body
    
        let brakeData =  new brakeUsegModule({
            brakeUsageAr:brakeUsageAr,
            brakeUsageEn:brakeUsageEn
    
        })
        brakeData.save()
         res.send(brakeData)
    })

    router.put("/brake/:id", async (req, res) => {
        try {
            const brake = await BrakeModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(brake);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/brake/usage/:id", async (req, res) => {
        try {
            const brake = await brakeUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(brake);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
