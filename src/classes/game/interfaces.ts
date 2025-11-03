import { GuildMember } from 'discord.js';
import { GAME_ROLES_TYPE } from '../../types/types';
import { Player } from './Player';
import { ChannelManager } from '../managers/ChannelManager';

export interface IPlayer {
  readonly member: GuildMember;
  readonly id: string;
  readonly username: string;
  role: GAME_ROLES_TYPE | undefined;
  isAlive: boolean;
}

export interface Game {
  lobbyChannel: ChannelManager;
  threadChannel: ChannelManager;
  players: Player[];
  gameStarted: boolean;
  id: string;
}

export interface IGameManager {
  startGame(gameId: string): Promise<boolean>;
  endGame(gameId: string): Promise<boolean>;
  postSystemMessage(gameId: string, content: string): Promise<boolean>;
}
