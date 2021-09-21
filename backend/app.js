const express = require('express')
const app = express()

const cards = require('./routes/cards')
const PORT = process.env.PORT || 8080
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
      );
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
});

app.use(express.json())
app.use('/cards',  cards)

app.listen(PORT, () => {
    console.log('App running on port', PORT)
})