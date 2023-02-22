const express=require('express');
const dotenv=require('dotenv').config();
const Connection=require('./database/db.js')
const Routes=require('./routes/route')
const cors=require('cors')
const bodyParser=require("body-parser")
const app=express();





app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',Routes)


const PORT=process.env.PORT;



app.listen(PORT,console.log(`Server started successfully on PORT ${PORT}`));



Connection();
