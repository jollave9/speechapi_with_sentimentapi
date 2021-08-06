var Sentiment = require('sentiment');
var sentiment = new Sentiment();
// var result = sentiment.analyze('Cats are stupid.');
// console.dir(result);    // Score: -2, Comparative: -0.666
  
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post('/',(req,res)=>{
    console.dir(req.body);
    res.json(sentiment.analyze(req.body.textarea))
})
app.listen(5000,()=>console.log('listening on port 5000'))