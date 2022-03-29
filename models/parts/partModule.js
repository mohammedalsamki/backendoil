import mongoose from 'mongoose';


const CategorySchema = new mongoose.Schema({
    name: String,
    slug: { type: String, index: true },
    Brand:String,
    ItemImage:String,
    Note:String,
    OEMPartNumber:String,
    BrandPartNumber:String,
    StockNumber:String,
    MinQty:Number,
    StockQuantity:Number,
    UnitPrice:Number,
    SaelsPrice:Number,
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Category'
    },
    ancestors: [{
         _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            index: true
    },
         name: String,
         slug: String,    
         Brand:String,
         ItemImage:String,
         Note:String,
         OEMPartNumber:String,
         BrandPartNumber:String,
         StockNumber:String,
         MinQty:Number,
         StockQuantity:Number,
         UnitPrice:Number,
         SaelsPrice:Number,
    }]
    });

    function slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')
      
        return string.toString().toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w\-]+/g, '') // Remove all non-word characters
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, '') // Trim - from end of text
      }

      CategorySchema.pre('save', async function (next) {
        this.slug = slugify(this.name);
        next();
     });
     

     const Category =mongoose.model('Category',CategorySchema);
     export default Category;