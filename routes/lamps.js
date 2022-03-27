import express  from "express";
import { getlamps,deletelamps,getlampsUsage,deletelampsUsage,getEStander,deleteEStander } from "../controllers/lampsController.js";
import lampsModule from "../models/lamps/lampsModel.js";
import lampsUsegModule from "../models/lamps/lampsUsgeModule.js";
import EStanderModule from "../models/lamps/Estander.js";


const router = express.Router();
const app= express();

router.get('/lamps',getlamps);
router.get('/lamps/EStander',getEStander);
router.get('/lamps/usage',getlampsUsage);
router.delete('/lamps/:id',deletelamps);
router.delete('/lamps/usage/:id',deletelampsUsage);
router.delete('/lamps/EStander/:id',deleteEStander);


router.get('/lamps/EStander/:id', function(req, res) {
    console.log(req.params.id)
    EStanderModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/lamps/:id', function(req, res) {
    console.log(req.params.id)
    lampsModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/lamps/usage/:id', function(req, res) {
        console.log(req.params.id)
        lampsUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/lamps",async (req,res)=>{
        const {lampsUsage,EStander,Brand,lampsGrade,Capasity,StockNumber,StockQuantiti,UnitPrice,Unit,SaelsPrice,Note,BrandPartNumber,OEMPartNumber,MinQty}=req.body
    
        let lampsData =  new lampsModule({
            lampsUsage:lampsUsage,
            EStander:EStander,
            Brand:Brand,
            lampsGrade:lampsGrade,
            Capasity:Capasity,
            StockNumber:StockNumber,
            StockQuantiti:StockQuantiti,
            UnitPrice:UnitPrice,
            Unit:Unit,
            SaelsPrice:SaelsPrice,
            Note:Note,
            BrandPartNumber:BrandPartNumber,
            OEMPartNumber:OEMPartNumber,
            MinQty:MinQty

    
        })
        lampsData.save()
         res.send(lampsData)
    })

router.post("/lamps/usage",async (req,res)=>{
        const {lampsUsageAr,lampsUsageEn}=req.body
    
        let lampsData =  new lampsUsegModule({
            lampsUsageAr:lampsUsageAr,
            lampsUsageEn:lampsUsageEn
    
        })
        lampsData.save()
         res.send(lampsData)
    })

    router.post("/lamps/EStander",async (req,res)=>{
        const {EStanderAr,EStanderEn}=req.body
    
        let lampsData =  new lampsUsegModule({
            EStanderAr:EStanderAr,
            EStanderEn:EStanderEn
    
        })
        lampsData.save()
         res.send(lampsData)
    })

router.put("/lamps/:id", async (req, res) => {
        try {
            const lamps = await lampsModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(lamps);
        } catch (error) {
            res.send(error);
        }
    });

    router.put("/lamps/EStander/:id", async (req, res) => {
        try {
            const lamps = await EStanderModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(lamps);
        } catch (error) {
            res.send(error);
        }
    });
    
router.put("/lamps/usage/:id", async (req, res) => {
        try {
            const lamps = await lampsUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(lamps);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
