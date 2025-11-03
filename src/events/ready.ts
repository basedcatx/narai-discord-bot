import { Client } from 'discord.js';
import { log } from '../utils/logger';

const ready = {
  name: 'clientReady',
  once: true,
  async execute(client: Client) {
    log.info('Client is ready', {
      name: client.user?.globalName,
      id: client.user?.id,
      guildCount: client.guilds.cache.size,
      guilds: client.guilds.cache.map(function (guild) {
        return { name: guild.name, id: guild.id };
      }),
    });
  },
};

export default ready;
