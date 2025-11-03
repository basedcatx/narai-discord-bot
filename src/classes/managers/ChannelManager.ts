import { ChannelType, Client, GuildChannel, PermissionsBitField } from 'discord.js';
import { IChannelManager } from './interfaces';

export class ChannelManager implements IChannelManager {
  private readonly channel: GuildChannel;

  constructor(channel: GuildChannel) {
    this.channel = channel;
  }

  public get id(): string {
    return this.channel.id;
  }

  public get name(): string {
    return this.channel.name;
  }

  public get type(): ChannelType {
    return this.channel.type;
  }

  public async postSystemMessage(content: string): Promise<void> {
    const formattedContent = `[SYSTEM ALERT] - ${content}`;
    if (this.channel.isSendable()) await this.channel.send({ content: formattedContent });
  }

  public isPostable(): boolean {
    return this.channel.isSendable();
  }

  public hasThreadPermission(bot: Client): boolean {
    const botMember = this.channel.members.get(bot.user?.id ?? '');
    if (botMember == undefined) return false;
    return this.channel
      .permissionsFor(botMember)
      .has([
        PermissionsBitField.Flags.CreatePublicThreads,
        PermissionsBitField.Flags.CreatePrivateThreads,
        PermissionsBitField.Flags.SendMessagesInThreads,
        PermissionsBitField.Flags.ManageThreads,
      ]);
  }

  public channelSupportThreads() {
    return !(this.channel.type === ChannelType.GuildText);
  }
}
