const express = require('express');
const line = require('@line/bot-sdk');
const { handleEvent } = require('../application/eventHandler');
const config = require('../infrastructure/config');

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.listen(3000, () => {
  console.log('LINE Bot is running on port 3000');
});
