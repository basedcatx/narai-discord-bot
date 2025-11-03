import { GuildChannel, Interaction, SlashCommandBuilder } from 'discord.js';
import { ClientWithExtendedTypes } from '../../types/types';
import { ChannelFactory } from '../../classes/managers/ChannelFactory';
import { log } from '../../utils/logger';

const createLobbyCommand = new SlashCommandBuilder()
  .setName('createlobby')
  .setDescription('Creates a game lobby in the channel this command was ran in.');

const command = {
  ...createLobbyCommand,
  cooldown: 0,
  async execute(client: ClientWithExtendedTypes, interaction: Interaction): Promise<void> {
    const channelManager = ChannelFactory.fromId(interaction.channelId ?? '', client);

    if (channelManager === undefined) {
      return log.error('Invalid guild channel. Was interaction called from a channel?', {
        channelId: interaction.channelId,
        channelName: (interaction.channel as GuildChannel).name,
      });
    }

    // We should also check if this channel can support threads.
    if (channelManager.channelSupportThreads()) {
      return await channelManager?.postSystemMessage(
        "I don't have permissions to create and manage thread-based channels. Maybe you should consider re-adding me to the server with necessary permisions? if this persists, please contact my author.",
      );
    }

    if (!channelManager?.hasThreadPermission(client)) {
      return await channelManager?.postSystemMessage(
        "I don't have permissions to create and manage thread-based channels. Maybe you should consider re-adding me to the server with necessary permisions? if this persists, please contact my author.",
      );
    }
  },
};

export default command;
