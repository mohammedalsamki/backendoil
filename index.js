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



import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api/oil',oil)
app.use('/api/filter',filter)
app.use('/api/brake',brake)
app.use('/api/spark',spark)
app.use('/api/belt',belt)
app.use('/api/carCare',carCare)
app.use('/api/lamps',lamps)




app.use(express.static('public'));


const CONNECTION_URL=process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>app.listen(PORT,()=>
console.log(`connected at : ${PORT}`))).catch((err)=>console.log(err.message));


