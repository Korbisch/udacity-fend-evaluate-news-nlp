var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const FormData = require('form-data');

const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/sentiment', async function (req, res) {
    const form = new FormData();
    form.append('key', process.env.API_KEY);
    form.append('lang', 'en');
    form.append('txt', req.query.text);
    const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', form);
    res.json(response.data);
})