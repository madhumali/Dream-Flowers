const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    route = require('./routes/index.js')

var stripe = require('stripe')('sk_test_cmCuicJ1Ub51o7rTxMApy2T000e7w0ifqY');

mongoose.connect("mongodb+srv://jana:RFCiEOFqxLzu3Ux1@mongodb1-iysa8.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(()=>{
    console.log('Connected to the database!')
})
.catch(()=>{
    console.log('Connection failed!'); 
});

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

app.use('/api', route);
app.post('/payme',(req,res)=>{
    console.log('The body is ',req.body);
    var charge = stripe.charges.create({
        amount: 230000,
        currency: 'gbp',
        source: req.body.token
      },(err,charge)=>{
          if(err){
              throw err;
          }
          res.json({
              success : true,
              message : "Payment Done"
          })
      });
})


app.get('/',(req, res)=>{
    res.send("roger i'm here babes");
});


const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});