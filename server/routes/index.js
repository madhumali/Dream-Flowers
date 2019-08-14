var express = require('express');
var router = express.Router();
var  Cart=require('../models/cart');

router.use('/items', require('../controllers/ItemController'));
//router.use('/product', require('../controllers/productController'));




let Product = require('../models/product');

router.route('/add').post(function (req, res) {
    let product = new Product(req.body);
   // let product=fs.readFileSync(req.file.path);
    product.save()
      .then(product => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });


  router.route('/').get(function (req, res) {
    Product.find(function (err, products){
      var productChunks =[];
      var chunkSize =3;
      for(var i=0;i<products.length;i+=chunkSize){
        productChunks.push(products.slice(i,i+chunkSize));
      }
    res.json(products);
  });
});

router.get('/add-to-cart/:id',function(req,res,next){
  var productId = req.params.id;
  var cart=new cart(req.session.cart ? req.session.cart : {});
  console.log("asd");

  Product.findById(productId,function(err,product){
    if(arr){
      return res.redirect('/');

    }
    cart.add(product,product.id);
    req.session.cart=cart;
    console.log(req.session.cart);
    res.redirect('/');
  })
})

module.exports = router


