const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/contactus', (req, res) => res.send('Welcome to Contact Us Page'))
app.get('/about', (req, res) => res.send('Welcome to About Page'))

app.get('/product', (req, res) => res.send('Welcome to Products Page'))
app.get('/product/:id', (req, res) => {
    res.send('Welcome to Product Detailed Page');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
