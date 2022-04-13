import express  from "express";
import PartNameModule from "../models/partName/partname.js";
import mongoose from 'mongoose';



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
router.get('/PartName/cat/', function(req, res) {
    const cat = JSON.stringify(req.body.category)
    console.log(cat)
    if(  cat==""){
        console.log("so long")
        res.status(401).json("try anouther ID")
         }else if(cat){
            PartNameModule.find({category:cat})
            .then(result=>{
                res.status(200).json(result)
            }).catch(function(error) {
                // handle error
                console.log("Error is: " + error);})

         }else{
        res.status(401).json("try anouther ID")

         }
    }
    


     
     );
     router.post('/product/cat/', function(req, res) {
        console.log(req.body.category)

        const cat = req.body.category
        console.log(cat.length)
        PartNameModule.find({category:cat})
        .then(result=>{
            res.status(200).json(result)
        }).catch(function(error) {
            if (error) {
                res.status(500).json(error);
              } else if (!cat) {
                res.status(404).json();      // This runs.
              }
            });

         });
    
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
        const {nameEN,nameAr,category,ItemImage}=req.body
    
        let PartNameData =  new PartNameModule({
            nameEN:nameEN,
            nameAr:nameAr,
            category:category,
            ItemImage:ItemImage,
    
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
