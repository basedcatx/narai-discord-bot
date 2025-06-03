import { Client, Collection, Interaction, Message } from 'discord.js';

interface GuildConfig {
  adminRoles: string[];
  minimumPlayers: number;
  maximumPlayers: number;
  dayDuration: number;
  nightDuration: number;
  revealRolesOnDeath: boolean;
  skipVoteAllowed: boolean;
  hardcoreMode: boolean;
  allowSpectators: boolean;
  gameTheme: 'mafia';
}

interface MessageCommand {
  description: string;
  execute(client: ClientWithExtendedTypes, msg: Message): Promise<void>;
}

interface Event {
  once: boolean;
  execute(client: ClientWithExtendedTypes, interaction: Message | Interaction): Promise<void>;
}
interface ClientWithExtendedTypes extends Client {
  messageCommands: Collection<string, MessageCommand>;
  events: Collection<string, Event>;
}
