const express = require('express');
const STORE = require('./store');
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());

app.get('/beer', (req, res) => {
    res.send(STORE);
});

app.get('/beerId', (req, res) => {
    // let url = 'https://api.untappd.com/v4/beer/info/2789250?client_id=377EC1A2D67810AF75E487D234F962F7DB659DBA&client_secret=3074FB7C7047342802622F113E3640B47CD95988';
    // request
    //     .get(url)
    //     .on('response', (response) => {
    //         console.log(response);
    //         res.send(response);
    //     });
    var options = {
        'method': 'GET',
        'url': 'https://api.untappd.com/v4/beer/info/2789250?client_id=377EC1A2D67810AF75E487D234F962F7DB659DBA&client_secret=3074FB7C7047342802622F113E3640B47CD95988&oauth_consumer_key=377EC1A2D67810AF75E487D234F962F7DB659DBA&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1577752337&oauth_nonce=kdZTByXAmsf&oauth_version=1.0&oauth_signature=bPGjLpvzbYl4YqnlsVpEfNeKMOM=',
        'headers': {
        }
    };
    request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
    });
})

app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});