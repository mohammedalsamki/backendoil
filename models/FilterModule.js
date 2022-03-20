import mongoose from "mongoose";

const filterSchema = mongoose.Schema({
    
    FilterUsage:String,
    Brand:String,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    PartNumber:Number,
    StockNumber:Number,
    ItemImage:String
 
})

const FilterModule =mongoose.model('filter',filterSchema);
export default FilterModule;