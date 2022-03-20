import mongoose from "mongoose";

const filterUsegSchema = mongoose.Schema({
    
    FilterUsageAr:String,
    FilterUsageEn:{ type: String , required: true},
    

})
const FilterUsegModule =mongoose.model('FilterUsage',filterUsegSchema);

export default FilterUsegModule;
