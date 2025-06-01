import { Client, Message } from 'discord.js';

const messageCreate = {
  name: 'messageCreate',
  once: false,
  async execute(client: Client, msg: Message) {},
};

export default messageCreate;
