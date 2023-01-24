const router = require('express').Router();
const myData = require('../models/data.model');
let mydata = require('../models/data.model');

router.route('/').get((req,res)=>{

    mydata.find()
    .then(users => res.json(users))
    .catch(err=> res.status(400).json('Error'+err));

});

router.route('/').post((req, res) => {
  //console.log(req.body.dataa)
  mydata.findById("63ce743236c4447584281c50") //  req.params.id
    .then(updata => {

     updata.dataa=req.body.dataa;


      updata.save()
        .then(() => res.json(updata.dataa))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;