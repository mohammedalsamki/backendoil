import express  from "express";
import { getOil } from "../controllers/oilController.js";
// import  OilModule from "../models/oilModel.js";
import OilModule from "../models/oilModel.js";

const router = express.Router();

router.get('/',getOil);
router.post("/",async (req,res)=>{
    const {OilUsage,Brand,Capasity,OilGrade,Unit,UnitPrice,StockQuantiti}=req.body
    console.log(req.body)
router.delete('/:id',deleteOil);
// router.delete('/:id', function(req, res, next) {
//     OilModule.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//      if (err) return next(err);
//      res.json(post);
//     });
//    });

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


export default router;