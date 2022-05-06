const express = require('express')
const app = express()
const businessInfo = require('./businessInfo.json')


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Business API")
})

app.get('/business', (req, res) => {
    res.send(businessInfo)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})