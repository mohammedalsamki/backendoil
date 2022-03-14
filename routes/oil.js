import express  from "express";
import { getOil,deleteOil,getOilUsge,deleteOilUsge } from "../controllers/oilController.js";
import OilModule from "../models/oilModel.js";
import OilUsegModule from "../models/oilUsgeModule.js";

const router = express.Router();

router.get('/',getOil);
router.get('/oilUseg',getOilUsge);

router.post("/",async (req,res)=>{
    const {OilUsage,Brand,Capasity,OilGrade,Unit,UnitPrice,StockQuantiti}=req.body
    console.log(req.body)
router.delete('/:id',deleteOil);

    let oildata =  new OilModule({
        OilUsage:OilUsage,
        Brand:Brand,
        Capasity:Capasity,
        OilGrade:OilGrade,
        Unit:Unit,
        UnitPrice:UnitPrice,
        StockQuantiti:StockQuantiti
    })
    console.log(oildata)
     oildata.save()
     res.send(oildata)
})
router.post("/oilUseg",async (req,res)=>{
    const {OilUsageAr,OilUsageEn}=req.body
    console.log(req.body)
router.delete('/oilUseg:id',deleteOilUsge);

    let oilUsgedata =  new OilUsegModule({
        OilUsageAr:OilUsageAr,
        OilUsageEn:OilUsageEn
    })
    console.log(oilUsgedata)
    oilUsgedata.save()
     res.send(oilUsgedata)
})


export default router;