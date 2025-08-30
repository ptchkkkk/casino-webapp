const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/deposit/bybit', (req, res) => {
    // Інтеграція з Bybit API
    axios.get('https://api.bybit.com/v2/private/wallet/balance', {
        headers: { 'X-BYBIT-API-KEY': 'your-api-key' }
    }).then(response => {
        res.send('Deposit successful via Bybit');
    }).catch(err => {
        res.send('Error with Bybit deposit');
    });
});

app.get('/deposit/binance', (req, res) => {
    // Інтеграція з Binance API
    axios.get('https://api.binance.com/api/v3/account', {
        headers: { 'X-MBX-APIKEY': 'your-api-key' }
    }).then(response => {
        res.send('Deposit successful via Binance');
    }).catch(err => {
        res.send('Error with Binance deposit');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
