const express = require('express');
const http=require('http');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');

const spath=path.join(__dirname,"/resto");
app.use(express.static(spath));

app.get('/',(req,res)=>{
  
  res.render('index')
});




app.listen(process.env.port || 8000);

console.log('Running at Port 8000');