import { processMessage } from '../domain/messageProcessor';
import { client } from '../infrastructure/lineClient';
import { WebhookEvent, MessageAPIResponseBase } from '@line/bot-sdk';

function handleEvent(event: WebhookEvent): Promise<MessageAPIResponseBase | null> {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const echo: line.TextMessage = processMessage(event.message.text);

  return client.replyMessage(event.replyToken, echo);
}

export { handleEvent };
