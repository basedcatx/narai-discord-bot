import { Client, GuildChannel } from 'discord.js';
import { IChannelManager } from './interfaces';
import { ChannelManager } from './ChannelManager';

/*
 * Finds a channel by ID and returns a specialized ChannelManagerContract Object wrapper, eg TextChannelManager
 */

export class ChannelFactory {
  private constructor() {}

  /*
   * @returns ChannelManagerContract | undefined
   */
  public static fromId(channelId: string, client: Client): IChannelManager | undefined {
    const guildChannel = client.channels.cache.get(channelId);
    if (guildChannel == undefined) return undefined;
    if (!(guildChannel instanceof GuildChannel)) return undefined;
    return new ChannelManager(guildChannel);
  }
}
