import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import oil from './routes/oil.js';
import filter from './routes/filter.js';
import brake from './routes/brake.js';
import spark from './routes/spark.js'
import belt from './routes/belt.js'
import carCare from './routes/carCare.js'
import lamps from './routes/lamps.js'
import category from "./routes/category.js";
import categoryNew from "./routes/categoryNew.js";
import products from "./routes/products.js"
import cart from "./routes/cart.js"
import bumps from './routes/bumps.js'
import bearing from './routes/bearings.js'
import Suspention from './routes/suspention.js'
import Wiper from "./routes/wiper.js"
import partName from "./routes/partName.js"



import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api/oil',oil);
app.use('/api/filter',filter);
app.use('/api/brake',brake);
app.use('/api/spark',spark);
app.use('/api/belt',belt);
app.use('/api/carCare',carCare);
app.use('/api/lamps',lamps);
app.use('/api/category',category);
app.use('/api/categoryNew',categoryNew);
app.use('/api/products',products);
app.use('/api/cart',cart);
app.use('/api/bumps',bumps);
app.use('/api/bearing',bearing);
app.use('/api/Suspention',Suspention);
app.use('/api/Wiper',Wiper);
app.use('/api/partName',partName);





app.use(express.static('uploads'));


const CONNECTION_URL=process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>app.listen(PORT,()=>
console.log(`connected at : ${PORT}`))).catch((err)=>console.log(err.message));


