import express  from "express";
import { getWiper,deleteWiper,getWiperUsage,deleteWiperUsage } from "../controllers/wiberController.js";
import WiperModule from "../models/wiper/wiper.js";
import WiperUsegModule from "../models/wiper/use.js";


const router = express.Router();
const app= express();

router.get('/Wiper',getWiper);
router.get('/Wiper/usage',getWiperUsage);
router.delete('/Wiper/:id',deleteWiper);
router.delete('/Wiper/usage/:id',deleteWiperUsage);

router.get('/Wiper/:id', function(req, res) {
    console.log(req.params.id)
    WiperModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/Wiper/usage/:id', function(req, res) {
        console.log(req.params.id)
        WiperUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/Wiper",async (req,res)=>{
        const {WiperUsage,WiperGrade,Brand,Tall,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,StockNumber,ItemImage,MinQty,OEMPartNumber}=req.body
    
        let WiperData =  new WiperModule({
            WiperUsage:WiperUsage,
            Brand:Brand,
            WiperGrade:WiperGrade,
            Tall:Tall,
            StockQuantity:StockQuantity,
            UnitPrice:UnitPrice,
            SaelsPrice:SaelsPrice,
            Note:Note,
            BrandPartNumber:BrandPartNumber,
            OEMPartNumber:OEMPartNumber,
            StockNumber:StockNumber,
            ItemImage:ItemImage,
            MinQty:MinQty
    
        })
        WiperData.save()
         res.send(WiperData)
    })

router.post("/Wiper/usage",async (req,res)=>{
        const {WiperUsageAr,WiperUsageEn}=req.body
    
        let WiperData =  new WiperUsegModule({
            WiperUsageAr:WiperUsageAr,
            WiperUsageEn:WiperUsageEn
    
        })
        WiperData.save()
         res.send(WiperData)
    })

    router.put("/Wiper/:id", async (req, res) => {
        try {
            const Wiper = await WiperModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(Wiper);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/Wiper/usage/:id", async (req, res) => {
        try {
            const Wiper = await WiperUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(Wiper);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
