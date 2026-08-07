require("dotenv").config();

const axios = require('axios'); 

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

//this is my ping

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

//this is help
app.command("/aerodynamic-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/aerodynamic-ping - Check bot latency
<<<<<<< HEAD
/aerodynamic-737 - Get a Boeing 737 fun fact
/aerodynamic-cessna172 - Get a Cessna 172p Skyhawk fun fact
/aerodynamic-wright - Get a Wright Flyer fun fact
/aerodynamic-blackbird - Get an SR-71 Blackbird fun fact
/aerodynamic-A380 - Get an Airbus A380 fun fact
/aerodynamic-747 - Get a Boeing 747 fun fact
/aerodynamic-concorde - Get a Concorde fun fact
/aerodynamic-beluga - Get an Airbus Beluga fun fact`
  });
});
//this is 737 fun fact
app.command("/aerodynamic-737", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "As the best-selling commercial jet in history, the 737 features incredible statistics: \n a 737 takes off or lands globally every five seconds, and over 1,000 are airborne at any given moment. "
        }
      },
      {
        type: "image",
        image_url: "https://www.boeing.com/content/theboeingcompany/us/en/commercial/737max/_jcr_content/root/container_2091943792/hero_teaser.coreimg.jpeg/1781558240249/737max-hero-desktop.jpeg",
        alt_text: "Boeing 737"
      }
    ]
  })
});//this is cessna fun fact

app.command("/aerodynamic-cessna172", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "The Cessna 172 Skyhawk is the most-produced aircraft in aviation history, with over 44,000 manufactured since 1956.  "
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cessna_172S_Skyhawk_SP%2C_Private_JP6817606.jpg/960px-Cessna_172S_Skyhawk_SP%2C_Private_JP6817606.jpg",
        alt_text: "Cessna 172"
      }
    ]
  })
});


//wright flyer
app.command("/aerodynamic-wright", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "To pilot the 1903 Wright Flyer, the aviator didn't sit in a cockpit—they laid flat on their stomach on the lower wing"
        }
      },
      {
        type: "image",
        image_url: "https://cdn.britannica.com/38/4738-050-C1D653C7/Orville-Wright-history-airplane-flight-Kill-Devil-December-17-1903.jpg?w=300",
        alt_text: "Wright Flyer"
      }
    ]
  })
});

app.command("/aerodynamic-blackbird", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "This plane flew so fast that the friction heated its titanium skin to 300°C, causing the entire airframe to expand by several inches mid-flight."
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lockheed_SR-71_Blackbird.jpg/960px-Lockheed_SR-71_Blackbird.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        alt_text: "SR-71 Blackbird"
      }
    ]
  })
});


app.command("/aerodynamic-A380", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: " The world's largest passenger jet is so massive that the total area of its wings is roughly equal to two full-sized basketball courts."
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg/960px-A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        alt_text: "Airbus A380"
      }
    ]
  })
});

app.command("/aerodynamic-747", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "The 747 was originally designed with a hump just so it could easily be converted into a cargo plane "
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/B-747_Iberia.jpg/960px-B-747_Iberia.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        alt_text: "Boeing 747"
      }
    ]
  })
});

app.command("/aerodynamic-concorde", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Because it flew faster than the speed of sound, this jet outran the earth's rotation."
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/British_Airways_Concorde_G-BOAC_03.jpg/960px-British_Airways_Concorde_G-BOAC_03.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        alt_text: "Concorde"
      }
    ]
  })
});

app.command("/aerodynamic-beluga", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "This giant transport plane has a massive forehead door that hinges upward, allowing it to swallow entire wings and fuselages of other airplanes."
        }
      },
      {
        type: "image",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hamburg-Finkenwerder_Airport_Airbus_Transport_International_Airbus_A300B4-608ST_F-GSTD_%28DSC09656%29.jpg/960px-Hamburg-Finkenwerder_Airport_Airbus_Transport_International_Airbus_A300B4-608ST_F-GSTD_%28DSC09656%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        alt_text: "Airbus Beluga"
      }
    ]
  })
});
