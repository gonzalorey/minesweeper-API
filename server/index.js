const express = require('express')
const cors = require('cors')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const Game = require('./game.js');

const PORT = process.env.PORT || 8000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/game', cors(), (req, res) => {
  var game = Game.newGame();

  res.send(game);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});