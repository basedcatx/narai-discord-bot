import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  DiscordjsError,
  EmbedBuilder,
  Emoji,
  GuildChannel,
  SlashCommandBuilder,
} from 'discord.js';
import { ClientWithExtendedTypes } from '../../types/types';
import { ChannelFactory } from '../../classes/managers/ChannelFactory';
import { log } from '../../utils/logger';
import { emojiCollection } from '../../constants/emojis';

const createLobbyCommand = new SlashCommandBuilder()
  .setName('createlobby')
  .setDescription('Creates a game lobby in the channel this command was ran in.');

// I am spreading the slashcommand instance to avoid having to manually define the command's name and desc (This is just a placeholder, and is a bad practice)
const command = {
  name: createLobbyCommand.name,
  description: createLobbyCommand.description,
  data: createLobbyCommand,
  cooldown: 0,
  async execute(client: ClientWithExtendedTypes, interaction: CommandInteraction): Promise<void> {
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

    const lobbyEmbed = new EmbedBuilder()
      .setDescription('Lobby created... expires in 5 mins, when the minimum number of players join')
      .setColor('Green')
      .setTimestamp();

    // This would actually be the final thing to do (To reply to our interaction)

    try {
      if (interaction.isRepliable()) {
        const response = await interaction.reply({ embeds: [lobbyEmbed], withResponse: true });
        response.resource?.message?.react(emojiCollection.thumbs_up);
        response.resource?.message?.react(emojiCollection.thumbs_down);
      } else {
        log.info('This current channel is not interactive', {
          channelId: interaction.channelId,
          channelType: interaction.channel?.type,
        });
      }
    } catch (e: unknown) {
      if (e instanceof DiscordjsError) {
        if (e.code === 'InteractionAlreadyReplied') {
          log.error('Interaction has already been replied to.');
        }
      }
    }
  },
};

export default command;
