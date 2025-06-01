import { Client, GatewayIntentBits } from 'discord.js';
import botConfigs from './config';
import path from 'node:path';
import { readdirSync } from 'fs';
import { pathToFileURL } from 'node:url';
import { db } from './database';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// we need to read through all the events and the once which are once, init them, once which are on, init them.

async function loadEvents() {
  const eventDirectory = readdirSync(
    pathToFileURL(path.join(__dirname, 'events')),
  );
  for (const event of eventDirectory) {
    const obj = await import(
      pathToFileURL(path.join(__dirname, 'events', event)).href
    );
    const {
      default: { once, execute, name },
    } = obj;
    if (once) {
      client.once(name, execute);
    } else {
      client.on(name, (interaction) => execute(client, interaction));
    }
  }
}

loadEvents().then((r) => r);

client.login(botConfigs.env.bot.token);
