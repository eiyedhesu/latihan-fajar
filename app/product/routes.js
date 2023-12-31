const router = require('express').Router()
const Product = require('./model')

router.post('/product', async (req,res)=> {
    const {users_id, name, price, stock, status} = req.body
    try {
        await Product.sync()
        const result = await Product.create({users_id, name, price, stock, status})
        return res.send(result)
    }catch(e) {
        return res.send(e)
    }
    
})

module.exports = router