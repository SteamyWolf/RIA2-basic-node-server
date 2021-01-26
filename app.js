const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
    res.send(`<html><h1>Welcome to this amazing Express Server. You are on port ${port}</h1></html>`)
})

app.get('/api', (req, res, next) => {
    const jsonData = {
        name: 'Wyatt',
        age: 26,
        iscool: true
    }
    res.json(jsonData)
})

app.listen(port, () => {
    console.log(`You are listening on port ${port}`)
})