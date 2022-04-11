import express  from "express";
import PartNameModule from "../models/partName/partname.js";


const router = express.Router();
const app= express();

router.get('/PartName',async (req,res)=>{
    try {
        const allPartName=await PartNameModule.find();
        res.status(200).json(allPartName);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}),
router.delete('/PartName/:id',async (req,res)=>{
    const id = req.params.id;
 
    try {
         await PartNameModule.findByIdAndRemove(id).exec();
         res.send('done')
    } catch (error) {
        console.log(error)
    }
 });

router.get('/PartName/:id', function(req, res) {
    console.log(req.params.id)
    PartNameModule.findById(req.params.id)
    .then(result=>{
        res.status(200).json(result)
    })
     });



router.post("/PartName",async (req,res)=>{
        const {originated,Brand,StockQuantity,UnitPrice,SaelsPrice,Note,BrandPartNumber,StockNumber,ItemImage,MinQty,OEMPartNumber}=req.body
    
        let PartNameData =  new PartNameModule({
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
        PartNameData.save()
         res.send(PartNameData)
    })



    router.put("/PartName/:id", async (req, res) => {
        try {
            const PartName = await PartNameModule.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            res.send(PartName);
        } catch (error) {
            res.send(error);
        }
    });

export default router;
