import express  from "express";
import Category from "../models/parts/partModule.js";

const router = express.Router();


const buildAncestors = async (id, parent_id) => {
    let ancest = [];
    try {
        let parent_category = await Category.findOne({ "_id":    parent_id },{ "name": 1, "slug": 1, "ancestors": 1 }).exec();
 if( parent_category ) {
           const { _id, name, slug } = parent_category;
           const ancest = [...parent_category.ancestors];
           ancest.unshift({ _id, name, slug })
           const category = await Category.findByIdAndUpdate(id, { $set: { "ancestors": ancest } });
         }
      } catch (err) {
          console.log(err.message)
       }
 }

 router.post('/', async (req, res) => {
    let parent = req.body.parent ? req.body.parent : null;
    const category = new Category({name: req.body.name, parent})
  try {
    let newCategory = await category.save();
    buildAncestors(newCategory._id, parent)
    res.status(201).send({ response: `Category ${newCategory._id}` });
  } catch (err) {
    res.status(500).send(err);
  }
  });

  router.get('/', async (req, res) => {
    try {
         const result = await Category.find({ slug: req.query.slug })
         .select({
         "_id": false, 
         "name": true,
         "ancestors.slug": true,
         "ancestors.name": true }).exec();
         res.status(201).send({ "status": "success", "result": result     });
    } catch (err) {
        res.status(500).send(err);
    }
    });
    router.get('/descendants', async (req, res) => {
        try {
            const result = await Category.find({ "ancestors._id":   req.query.category_id })
             .select({ "_id": false, "name": true })
             .exec();
           res.status(201).send({ "status": "success", "result": result });
           } catch (err) {
             res.status(500).send(err);
           }
        })

    router.get("/get", async (req,res)=>{
        try {
            const allbrake=await Category.find();
            res.status(200).json(allbrake);
        } catch (error) {
            res.status(404).json({ message: error.message})
        }
    })
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
    router.put("/update/:id", async (req, res) => {
        const category_id=req.params.id;
        const category_name=req.body.category_name;
        try {
            const category = await Category.findByIdAndUpdate(category_id, { $set: { "name": category_name, "slug": slugify(category_name) } });
            const ancestors =await Category.updateMany({"ancestors._id": category_id},
                {"$set": {"ancestors.$.name": category_name, "ancestors.$.slug": slugify(category_name) }}, {multi: true});
            res.status(201).send({ "status": "success", "result": ancestors });
        } catch (error) {
            res.send(error);
        }
    });
    router.delete("/delete/:id",async (req,res)=>{
        const category_id = req.params.id;
     
        try {
           let err = await Category.findByIdAndRemove(category_id);
            if(!err)
              result = await Category.deleteMany({"ancestors._id": category_id});
         res.send('done')

        } catch (error) {
            console.log(error)
        }
     })


export default router;
