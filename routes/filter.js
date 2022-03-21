import express  from "express";
import { getFilter,deleteFilter,getFilterUsage,deleteFilterUsage } from "../controllers/filterController.js";
import FilterModule from "../models/FilterModule.js";
import FilterUsegModule from "../models/filterUsageModule.js";


const router = express.Router();
const app= express();

router.get('/filter',getFilter);
router.get('/filter/usage',getFilterUsage);
router.delete('/filter/:id',deleteFilter);
router.delete('/filter/usage/:id',deleteFilterUsage);

router.get('/filter/:id', function(req, res) {
    console.log(req.params.id)
    FilterModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });

router.get('/filter/usage/:id', function(req, res) {
        console.log(req.params.id)
        FilterUsegModule.findById(req.params.id)
        .then(result=>{
            res.status(200).json(result)
        })
         });

router.post("/filter",async (req,res)=>{
        const {FilterUsage,Brand,StockQuantity,UnitPrice,SaelsPrice,Note,PartNumber,StockNumber,ItemImage,MinQty}=req.body
    
        let filterData =  new FilterModule({
            FilterUsage:FilterUsage,
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
        filterData.save()
         res.send(filterData)
    })

router.post("/filter/usage",async (req,res)=>{
        const {FilterUsageAr,FilterUsageEn}=req.body
    
        let filterData =  new FilterUsegModule({
            FilterUsageAr:FilterUsageAr,
            FilterUsageEn:FilterUsageEn
    
        })
        filterData.save()
         res.send(filterData)
    })

    router.put("/filter/:id", async (req, res) => {
        try {
            const filter = await FilterModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(filter);
        } catch (error) {
            res.send(error);
        }
    });
    router.put("/filter/usage/:id", async (req, res) => {
        try {
            const filter = await FilterUsegModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(filter);
        } catch (error) {
            res.send(error);
        }
    });
export default router;
