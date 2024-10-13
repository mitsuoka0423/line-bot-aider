const { processMessage } = require('../domain/messageProcessor');
const { client } = require('../infrastructure/lineClient');

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const echo = processMessage(event.message.text);

  return client.replyMessage(event.replyToken, echo);
}

module.exports = { handleEvent };
