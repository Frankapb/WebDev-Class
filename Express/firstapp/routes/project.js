var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

// ALL BLOG POSTS
router.get('/', (req, res) => {
    fetch(process.env.API_URL)
        .then(res => res.json())
        .then(last => {
            console.log(last)
            res.render('blog', { title: 'BLOG PAGE', posts: last })
        })

})

// SINGLE POST
router.get('/:id',(req,res)=>{
    let postID = req.params.id
    fetch(`${process.env.API_URL}/${postID}`)
    .then(res=>res.json())
    .then(last=>{
        res.render('blog_detail',{post:last})
    })
})

const auth = {
    user: 'root',
    pass: 'admin'
}


const authToken = (req, res, next) => {
    console.log('hello this is from middleware')
    //console.log(req.body)
    let authDecoded = Buffer.from(req.headers.authorization.substr(6), 'base64').toString('utf-8').split(":");
    if (auth.user != authDecoded[0] || auth.pass != authDecoded[1]) {
        res.json({
            msg: 'not allowed'
        })
    } else {
        next();
    }
    console.log(authDecoded)

}


// /blog/api
router.get('/api', authToken, (req, res) => {
    console.log(req.body)
    res.json({
        id: 1
    })
})


module.exports = router