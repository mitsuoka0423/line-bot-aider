interface Config {
  channelAccessToken: string;
  channelSecret: string;
}

const config: Config = {
  channelAccessToken: Deno.env.get("CHANNEL_ACCESS_TOKEN") || "",
  channelSecret: Deno.env.get("CHANNEL_SECRET") || "",
};

export default config;
