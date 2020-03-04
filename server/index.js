const express = require('express')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const Game = require('./game.js');

const PORT = process.env.PORT || 8000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/game', (req, res) => {
  var game = Game.newGame();

  res.send(game);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});