const express = require('express');
const fetch = require('node-fetch');
 a

const app = express("express");
const PORT = process.env.PORT || 3000;
const API_KEY = 'c170f6e53b23382a8249f4fea108a1ef';


app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
 const url =(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${c170f6e53b23382a8249f4fea108a1ef}}&units=metric`;)

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/', (req, res) => {
    res.send('API de previsão do tempo');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


