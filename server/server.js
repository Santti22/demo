const express = require('express');
const cors = require('cors');
const https = require('https');
const { error } = require('console');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');

app.use(cors());

//Rss fetching to json

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

// Getting data from frontend and pushing to mailchimps list

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.post('/api/subscribe', cors(), (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }
  
    // Save the email address to a file
    fs.appendFile('subscribed_emails.txt', `${email}\n`, (err) => {
      if (err) {
        console.error('Error saving email:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
  
      res.json({ success: true, message: 'Thank you for subscribing!' });
    });
  });
app.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`)
});