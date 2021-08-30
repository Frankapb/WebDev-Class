var express = require('express');
var router = express.Router();
const apiController = require('./controller/controller');



// MIDDLEWARE FUNCTION 
const getLogger = (req,res,next)=>{
  console.log(req.query.username);
  next() // allows to response to user/client 
}

/* GET home page. */
router.get('/', getLogger, function(req, res, next) {
  // console.log(req.query);
  res.render('index', { title: 'Seven heaven' });
});

router.get('/api', apiController)

module.exports = router;
