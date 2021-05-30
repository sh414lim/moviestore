const express=require('express');
const app=express();
const api=require('./index');
const cors=require('cors');


app.use(cors());
app.use('/api',api);

const port=3002;
app.listen(port,()=>console.log(`Listening on Port ${port}`))