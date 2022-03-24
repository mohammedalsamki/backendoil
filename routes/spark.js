import express  from "express";
import { getspark,deletespark,getoriginated,deleteoriginated } from "../controllers/sparkController.js";
import sparkModule from "../models/spark/sparkModule.js";
import sparkUsegModule from "../models/spark/sparkUsegModule.js";


const router = express.Router();
const app= express();

router.get('/spark',getspark);
router.get('/spark/usage',getoriginated);
router.delete('/spark/:id',deletespark);
router.delete('/spark/usage/:id',deleteoriginated);

router.get('/spark/:id', function(req, res) {
    console.log(req.params.id)
    sparkModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/spark/usage/:id', function(req, res) {
        console.log(req.params.id)
        sparkUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/spark",async (req,res)=>{
        const {originated,Brand,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,StockNumber,ItemImage,MinQty,OEMPartNumber}=req.body
    
        let sparkData =  new sparkModule({
            originated:originated,
            Brand:Brand,
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
        sparkData.save()
         res.send(sparkData)
    })

router.post("/spark/usage",async (req,res)=>{
        const {originatedAr,originatedEn}=req.body
    
        let sparkData =  new sparkUsegModule({
            originatedAr:originatedAr,
            originatedEn:originatedEn
    
        })
        sparkData.save()
         res.send(sparkData)
    })

    router.put("/spark/:id", async (req, res) => {
        try {
            const spark = await sparkModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(spark);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/spark/usage/:id", async (req, res) => {
        try {
            const spark = await sparkUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(spark);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
