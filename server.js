var express = require('express');
var app = express();
var port = process.env.port || 3000;

// Middleware for serving static files
app.use(express.static('public_html'));

// Route for displaying order page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/addTwoNumbers', (req, res) => {
    let message = 'successful';
    let number1 = req.query.number1;
    let number2 = req.query.number2;
    let data = parseInt(number1) + parseInt(number2);

    res.json({
        message: message,
        code: 200,
        result: data
    });
})

app.listen(port, () => {
    console.log('server started')
})