import express from 'express'
import routerPayment from './routes/payment.routes.js'
import { PORT } from './config.js' 
import path from 'path'
const app=express()

//Middlewares
app.use(express.json())
// static files
app.use(express.static(path.resolve('src/public')))
// routes
app.use(routerPayment)
// Server on 
app.listen(PORT,()=>{
    console.log(`SERVER ON PORT:${PORT}`);
})
