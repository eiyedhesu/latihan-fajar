const express = require('express')
const app = express()
const productRouter = require ('./app/product/routes')
const logger = require('morgan')
const Product = require ('./app/product/model')


Product.sync()
  
app.use(logger('dev'))
app.use(express.json())
app.use('/api', productRouter)
app.use((req, res, next)=>{
    res.status(404)
    res.send({
        status: 'failed',
        message: 'resource' + req.originalUrl + 'not found'
    })
})
app.listen(3000, () => console.log('Server: http://localhost:3000'))