import line from '@line/bot-sdk';
import config from './config';

const client = new line.Client({
  channelAccessToken: config.channelAccessToken || '',
  channelSecret: config.channelSecret || '',
});

export { client };
