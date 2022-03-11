import OilModule from "../models/oilModel.js";

export const getOil= async (req,res)=>{
    try {
        const allOil=await OilModule.find();
        res.status(200).json(allOil);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
export const createOil =async (req,res)=>{
    // res.send('Router is working');
    const oil= req.body;

    const newOil = new OilModule(oil);
    try {
       await newOil.save();
       res.status(201).json(newOil);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const deleteOil =async (req,res)=>{
    OilModule.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log('hi')
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
     });
}


