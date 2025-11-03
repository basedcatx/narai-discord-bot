import { GuildMember } from 'discord.js';
import { GAME_ROLES_TYPE } from '../../types/types';
import { IPlayer } from './interfaces';

export class Player implements IPlayer {
  private readonly member: GuildMember;
  private playerRole: GAME_ROLES_TYPE | undefined = undefined;
  isAlive: boolean = false;

  constructor(member: GuildMember) {
    this.member = member;
  }

  public get username() {
    return this.member.displayName;
  }

  public setRole(role: GAME_ROLES_TYPE) {
    if (this.playerRole) return;
    this.playerRole = role;
    this.isAlive = true;
  }

  public get role(): GAME_ROLES_TYPE | undefined {
    return this.role;
  }

  public get id() {
    return this.member.id;
  }

  public hasRole() {
    if (!this.isAlive) return false;
    return this.role && true;
  }
}
