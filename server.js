const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cardsRoute = require('./routes/cards-route.js');

const db = require('./db/models');
const { Card } = db;

app.use(bodyParser.urlencoded( { extended : true } ) );
app.use(methodOverride('_method'));

app.use('/api/cards', cardsRoute);

app.use(function(req, res, next) {
  console.log('bad route yo!');
  res.send('doesnt exist');
});

app.listen(PORT, () => {
  console.log('Server listening on', PORT);
  db.sequelize.sync();
});