const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

// Middleware for serving static files
app.use(express.static('public_html'));

app.use(bodyParser.urlencoded({ extended: false }));

// Route for displaying index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addTwoNumbers', (req, res) => {

    let { number1, number2 } = req.body
    let result = parseInt(number1) + parseInt(number2);

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
    <div class="container">
        <h2>The result of ${number1} plus ${number2} is ${result}</h2>
        <p>Please click <a href="/">here</a> to return to the previous page.</p>
    </div>
    </body>
    </html>
  `;

  res.send(html);
})

app.listen(port, () => {
    console.log('server started')
})