import { Client} from "discord.js";

export class GuildFactory {
    private id: string;
    private name;

   private constructor (name: string, id: string)  {
    this.id = id;
    this.name = name;
   }

   static fromId(guildId: string, client: Client): GuildFactory | undefined  {
      const guild = client.guilds.cache.find((g) => g.id == guildId);
      if (guild === undefined) {
        throw new Error ("Guild not found. Are you sure the bot is installed in the specified server?")
      }
      return new GuildFactory(guild.name, guild.id);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

}