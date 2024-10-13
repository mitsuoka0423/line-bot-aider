import { processMessage } from "../domain/messageProcessor.ts";
import { client } from "../infrastructure/lineClient.ts";
import { WebhookEvent, MessageAPIResponseBase } from "https://deno.land/x/linebot_sdk/mod.ts";

async function handleEvent(event: WebhookEvent): Promise<MessageAPIResponseBase | null> {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  const echo = processMessage(event.message.text);

  return await client.replyMessage(event.replyToken, echo);
}

export { handleEvent };
