import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { handleEvent } from "../application/eventHandler.ts";
import config from "../infrastructure/config.ts";
import { middleware } from "../infrastructure/lineClient.ts";

const app = new Application();
const router = new Router();

router.post("/webhook", async (context) => {
  try {
    const body = await context.request.body().value;
    const results = await Promise.all(body.events.map(handleEvent));
    context.response.body = results;
  } catch (err) {
    console.error(err);
    context.response.status = 500;
  }
});

app.use(middleware(config));
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = Deno.env.get("PORT") || 3000;

console.log(`LINE Bot is running on port ${PORT}`);
await app.listen({ port: +PORT });
