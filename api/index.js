const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const models = require('./models/index.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    
app.post('/users', (req, res) => {
    console.log(req.body)
    models.User.create({ 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    Telephone: req.body.Telephone,
    address: req.body.address})
})
app.get('/echo/:what', (req, res) => {
    res.json(req.params)
})

module.exports = {
   path: '/api',
   handler: app
}