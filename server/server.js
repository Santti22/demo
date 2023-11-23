const express = require('express');
const cors = require('cors');
const https = require('https');
const { error } = require('console');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/rss-feed', async (req, res) => {
    https.get('https://www.lianatech.com/resources/blog.rss', (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
           res.json({ data: data});
        })
    }).on('error', (error) => {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'internal server error'});
    });
});



app.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`)
});