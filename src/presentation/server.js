import express from 'express';
import line from '@line/bot-sdk';
import { handleEvent } from '../application/eventHandler';
import config from '../infrastructure/config';

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`LINE Bot is running on port ${PORT}`);
});
