const router = require('express').Router()
const Product = require('./model')

router.post('/product', async (req,res)=> {
    const {user_id, name, price, stock, status} = req.body
    try {
        await Product.sync()
        const result = await Product.create({user_id, name, price, stock, status})
        res.send(result)
    }catch(e) {
        res.send(e)
    }
    
})

module.exports = router