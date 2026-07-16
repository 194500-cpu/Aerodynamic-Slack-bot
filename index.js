require("dotenv").config();

const axios = require('axios'); 

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/aerodynamic-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();


app.command("/aerodynamic-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/aerodynamic-ping - Check bot latency
/aerodynamic-737 - Get an Airbus 737 fun fact
/aerodynamic-cessna172 - Get a Cessna 172p Skyhawk fun fact`
  });
});

app.command("/aerodynamic-737", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: "As the best-selling commercial jet in history, the 737 features incredible statistics: \n a 737 takes off or lands globally every five seconds, and over 1,000 are airborne at any given moment. "})
});

app.command("/aerodynamic-cessna172", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: "The Cessna 172 Skyhawk is the most-produced aircraft in aviation history, with over 44,000 manufactured since 1956.  "})
});