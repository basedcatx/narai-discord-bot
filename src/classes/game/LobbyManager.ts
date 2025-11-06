import { LobbyManagerError } from '../../errors/LobbyManagerError';
import { MAX_PLAYER_IN_LOBBY } from '../../types/globals';
import { PlayerManager } from './PlayerManager';

export class LobbyManager {
  private readonly channelId: string;
  private players: PlayerManager[];

  constructor(channelId: string) {
    this.channelId = channelId;
  }

  public getPlayerCount() {
    return this.players.length;
  }

  public addPlayer(player: PlayerManager) {
    if (this.players.length > MAX_PLAYER_IN_LOBBY) {
      throw new LobbyManagerError("Max player's for lobby attained.", 'LOBBY_MAX_PLAYER_ERROR', {
        count: this.players.length,
        lobby: this.channelId,
      });
    }

    /*
     * We should make sure the player doesn't belong to another lobby ie, he/she should have a state that isn't in_game.
     */
    
  }
}
