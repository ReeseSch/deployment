const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.port

app.listen(port, () => {
    console.log(`Running on ${port}! :)`)
})


