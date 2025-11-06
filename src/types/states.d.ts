// This refers to the game's state (When the thread is created, what happens next.)
export const GAME_STATES = {
  idle: 'idle',
  in_progres: 'ongoing',
  ended: 'ended',
  awaiting_instructions: 'awaiting_instructions',
};

export type GAME_STATES_TYPE = keyof typeof GAME_STATES;

export const LOBBY_STATE = {
  idle: 'idle',
  awaiting_players: 'awaiting_players',
};

export type LOBBY_STATE_TYPE = keyof typeof LOBBY_STATE;

export const PLAYER_STATE = {
  idle: 'idle',
  in_game: 'in_game',
  in_lobby: 'in_lobby',
  game_banned: 'game_banned',
  spectating: 'spectating',
};

export type PLAYER_STATE_TYPE = keyof typeof PLAYER_STATE;

export const PLAYER_IN_GAME_STATE = {
  is_idle: 1,
  is_alive: 1 << 2,
  is_muted: 1 << 3,
  has_voted: 1 << 4,
  spectating: 1 << 5,
};
