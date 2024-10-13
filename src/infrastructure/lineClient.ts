import { Client, middleware } from "https://deno.land/x/linebot_sdk/mod.ts";
import config from "./config.ts";

const client = new Client({
  channelAccessToken: config.channelAccessToken,
  channelSecret: config.channelSecret,
});

export { client, middleware };
