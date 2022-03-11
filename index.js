import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import router from './routes/oil.js';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
// app.use('/oil',router);
app.use('/api/oil',router)



// app.use(bodyParser.json({limit:"20mb",extended:true}))
// app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))



const CONNECTION_URL=process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>app.listen(PORT,()=>
console.log(`connected at : ${PORT}`))).catch((err)=>console.log(err.message));


