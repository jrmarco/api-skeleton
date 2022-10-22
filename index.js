// Load main libraries
const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');

// Init express app
const app = express();
// Load server settings
const settings = require('./settings');

// Add CORS, json and urlencoded bodies parsing
app.use(cors(settings.corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load sample class
const sample = require('./src/sample');

// GET endpoint sample
app.get('/get-test', (req, res) => {
  res.status(200).json({
    status: true,
    response: 'Your GET request on /get-test has been received!',
    sample,
  });
});

// POST endpoint sample
app.post('/post-test', (req, res) => {
  const { headers, body } = req;
  const ip = headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.status(200).send({
    status: true,
    response: 'Your POST request on /post-test has been received!',
    data: {
      ip,
      headers,
      body
    }
  });
});

// GET/POST endpoint sample
app.all('/wild-endpoint', (req, res) => {
  const { body } = req;
  const data = {
    status: true,
    response: `Your ${req.method} request on /wild-endpoint has been received!`
  };
  if (req.method === 'POST' && body) {
    data.body = body;
  }
  res.status(200).json(data);
});

// GET endpoint sample with HTML response
app.get('/html-test', (req, res) => {
  res.status(200).send(`
<html lang="en" prefix="og: http://ogp.me/ns#">
  <head>
    <title>Webpage - Microservice served</title>
    <style>
      body {background-color: powderblue;}
      h1   {color: blue;}
      p    {color: red;}
    </style>
  </head>
  <body class="en-doc">
    <section class="page content">
      <h1>Success!</h1>
      <p>My first microservice served webpage</p>
    </section>
  </body>
</html>
`)
});

// Unmatching endpoint
app.all('*', (req, res) => {
  res.status(404).send('Not found');
});

// Loads certificate to serve service with HTTPS
if (settings.env && settings.env === 'prod') {
  const { priv, cert } = settings.certificate;
  https.createServer({
    key: fs.readFileSync(priv),
    cert: fs.readFileSync(cert),
  }, app).listen(settings.port, () => { });
} else {
  // Serve service with HTTP
  app.listen(settings.port, () => { });
}