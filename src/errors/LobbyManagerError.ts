type error_codes = 'LOBBY_MAX_PLAYER_ERROR' | 'LOBBY_EXPIRED_ERROR';

export class LobbyManagerError extends Error {
  private readonly c: error_codes;
  private ct: object | undefined;

  constructor(error: string, code: error_codes, ctx?: object) {
    super(error, { cause: code, ...ctx });
    this.c = code;
    this.ct = ctx;
  }

  public get code(): error_codes {
    return this.c;
  }

  public get ctx(): object | undefined {
    return this.ct;
  }
}
