var express = require('express');
var router = express.Router();


const checkToken = (req,res,next)=>{
    let secret_token = req.query.token
    console.log(secret_token)
    if(secret_token !=process.env.SECRET ){
        res.status(500).json({
            message:"Invalid API key."
        })
    }
    next()
}

router.get('/',checkToken,(req,res)=>{
    res.json({
        id:1,
        "username":"intecbrussel"
    })
})


module.exports=router;