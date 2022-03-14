import express  from "express";
import { getOil,deleteOil,getOilUsge,deleteOilUsge,getBrand,deleteBrand } from "../controllers/oilController.js";
import OilModule from "../models/oilModel.js";
import OilUsegModule from "../models/oilUsgeModule.js";
import BrandModule from "../models/brandModules.js";

const router = express.Router();

router.get('/',getOil);
router.get('/oilUseg',getOilUsge);
router.get('/brand',getBrand);


router.post("/",async (req,res)=>{
    const {OilUsage,Brand,Capasity,OilGrade,Unit,UnitPrice,StockQuantiti}=req.body
    console.log(req.body)
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

    let oilUsgedata =  new OilUsegModule({
        OilUsageAr:OilUsageAr,
        OilUsageEn:OilUsageEn
    })
    console.log(oilUsgedata)
    oilUsgedata.save()
     res.send(oilUsgedata)
})
router.post("/brand",async (req,res)=>{
    const {BrandAr,BrandEn}=req.body
    console.log(req.body)

    let branddata =  new BrandModule({
        BrandAr:BrandAr,
        BrandEn:BrandEn
    })
    console.log(branddata)
    branddata.save()
     res.send(branddata)
})
router.delete('/:id',deleteOil);
router.delete('/oilUseg/:id',deleteOilUsge);
router.delete('/brand/:id',deleteBrand);




export default router;