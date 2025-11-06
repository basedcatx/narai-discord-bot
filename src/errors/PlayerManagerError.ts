type error_codes =
  | 'player_not_in_game_error'
  | 'invalid_state_error'
  | 'player_state_dead_error'
  | 'player_state_spectating_error';

export class PlayerManagerError extends Error {
  private readonly c: error_codes;
  private readonly ct: object | undefined;

  constructor(error: string, code: error_codes, ctx?: object) {
    super(error, { cause: code, ...ctx });
    this.c = code;
    this.ct = ctx;
  }

  public get code() {
    return this.c;
  }

  public get ctx() {
    return this.ct;
  }
}
