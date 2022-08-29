require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const { conexion } = require('./conexiones/mongo')

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())



app.use('/app', require('./app/routes'))


conexion()
app.listen(port, () => {
    console.log("puerto " + port + " abierto")
})