const express = require('express');
const cors = require('cors');
const app = express();
const places = require('./data/place.json')
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Travel Guru Resources Running')
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.listen(port, () => {
    console.log(`Travel Guru Resources Running ${port}`)
})