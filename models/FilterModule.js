import mongoose from "mongoose";

const filterSchema = mongoose.Schema({
    
    FilterUsage:String,
    Brand:String,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    BrandPartNumber:String,
    OEMPartNumber:String,
    StockNumber:String,
    ItemImage:String,
    MinQty:Number
 
})

const FilterModule =mongoose.model('filter',filterSchema);
export default FilterModule;