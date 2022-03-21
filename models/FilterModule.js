import mongoose from "mongoose";

const filterSchema = mongoose.Schema({
    
    FilterUsage:String,
    Brand:String,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    Note:String,
    PartNumber:String,
    StockNumber:Number,
    ItemImage:String,
    MinQty:Number
 
})

const FilterModule =mongoose.model('filter',filterSchema);
export default FilterModule;