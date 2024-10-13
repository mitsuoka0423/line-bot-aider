import dotenv from 'dotenv';
dotenv.config();

interface Config {
  channelAccessToken: string;
  channelSecret: string;
}

const config: Config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || '',
};

export default config;
