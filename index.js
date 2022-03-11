//Configuração inicial
require('dotenv').config()
const express =  require('express') //importa express
const mongoose = require('mongoose')
const app = express() // inicializa express

//Ler JSON - middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//api
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//Rota - endpoint
app.get('/', (req, res) => {

    res.json({
        message: 'Olá Express!'
    })

})

//
mongoose
    .connect(process.env.DB_CON)
    .then(() => {
        console.log("Conectamos com DB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
