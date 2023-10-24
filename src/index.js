const express=require('express')
const path=require('path')
const expbhs=require('express-handlebars').engine


const app=express()

//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//PORT 
const PORT= 3000

//settings views
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',expbhs({
        defaultLayout:'main',
        layoutsDir:path.join(app.get('views'),'layouts'),
        partialsDir:path.join(app.get('views'),'partials'),
        extname:'.hbs'
}))

app.set('view engine','.hbs')

// routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname,'public')))

// Server on 
app.listen(PORT,()=>{
    console.log(`SERVER ON PORT:${PORT}`);
})
