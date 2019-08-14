var express = require('express');
var router = express.Router();

const Item = require('../models/item');

router.post('/', (req, res, next)=>{
    let newitem = new Item ({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity
    });
    

    newitem.save((err, item)=> {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Item has been added to the DB'});
        }
    });

});

module.exports = router;