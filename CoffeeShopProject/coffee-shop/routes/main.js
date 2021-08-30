const express = require('express')
const router = express.Router()

router.get('/', (req,res,next) => {
    const data = req.context

    res.render('home', data)

})

router.get('/blog', (req,res,next) => {
    const data = req.context

    
    res.render('blog', data)

})

router.post('/order', (req,res,next)=> {
    const orderData = req.body
    // const orderCtr = controllers.order.instance()
    //    const order =  orderCtr.post(orderData)
    res.json(orderData)
})

module.exports = router
