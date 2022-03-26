import express  from "express";
import { getbelt,deletebelt,getoriginated,deleteoriginated } from "../controllers/beltController.js";
import beltModule from "../models/belt/beltModule.js";
import beltUseModule from "../models/belt/beltUseModule.js";


const router = express.Router();
const app= express();

router.get('/belt',getbelt);
router.get('/belt/usage',getoriginated);
router.delete('/belt/:id',deletebelt);
router.delete('/belt/usage/:id',deleteoriginated);

router.get('/belt/:id', function(req, res) {
    console.log(req.params.id)
    beltModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/belt/usage/:id', function(req, res) {
        console.log(req.params.id)
        beltUseModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/belt",async (req,res)=>{
        const {originated,Brand,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,StockNumber,ItemImage,MinQty,OEMPartNumber}=req.body
    
        let beltData =  new beltModule({
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
        beltData.save()
         res.send(beltData)
    })

router.post("/belt/usage",async (req,res)=>{
        const {originatedAr,originatedEn}=req.body
    
        let beltData =  new beltUseModule({
            originatedAr:originatedAr,
            originatedEn:originatedEn
    
        })
        beltData.save()
         res.send(beltData)
    })

    router.put("/belt/:id", async (req, res) => {
        try {
            const belt = await beltModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(belt);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/belt/usage/:id", async (req, res) => {
        try {
            const belt = await beltUseModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(belt);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
