const bodyParser = require("body-parser"),
 { Router } = require("express"),
 express = require('express'),
 welcome = require("./router.controller"),
 cors = require('cors'),
 productRoutes = require("../apiComponents/products/infrastructure/product.routes"),
 userRoutes = require("../apiComponents/user/infrastructure/routes"),
 categoryRoutes = require('../apiComponents/category/infrastructure/category.routes'),
 proofOfPayRoutes = require('../apiComponents/proofOfPay/infrastructure/proofOfPay.routes'),
 orderRoutes = require('../apiComponents/order/infrastructure/order.routes'),
 cardRoutes = require('../apiComponents/card/infrastructure/card.routes'),
 { join } = require('path')

const router = () => {
    const router = Router(),
     userRouter = Router(),
     productRouter = Router(),
     categoryRouter = Router(),
     proofOfPayRouter = Router(),
     orderRouter = Router(),
     cardRouter = Router(),
     PUBLIC_PATH = join(__dirname, '../uploads')
//console.log('PATH_ROUTES -> ', join(__dirname, '../uploads'));
    userRouter
     .use(bodyParser.json())
     .use('/user', userRoutes())
    
    productRouter
     .use(bodyParser.json())
     .use('/product', productRoutes())

    categoryRouter
     .use(bodyParser.json())
     .use('/category', categoryRoutes())
    

     proofOfPayRouter
      .use(bodyParser.json())
      .use('/proofOfPay', proofOfPayRoutes())

    orderRouter
      .use(bodyParser.json())
      .use('/order', orderRoutes())
    
    cardRouter
    .use(bodyParser.json())
    .use('/card', cardRoutes())

    router
      .use('/api/1.0', userRouter)
      .use('/api/1.0', productRouter)
      .use('/api/1.0', categoryRouter)
      .use('/api/1.0', proofOfPayRouter)
      .use('/api/1.0', orderRouter)
      .use('/api/1.0', cardRouter)
      .use('/api/1.0/public', express.static(PUBLIC_PATH))
      
    return router
}

module.exports = router