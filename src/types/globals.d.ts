export const MAX_PLAYER_IN_LOBBY = 20;

export const PLAYER_ROLES = {
  doctor: {
    can_kill: false,
    can_ressurect: true,
  },
  townie: {
    can_kill: false,
    can_ressurect: false,
  },
  mafia: {
    can_kill: true,
    can_ressurect: false,
  },
};

export type PLAYER_ROLES_TYPE = keyof typeof PLAYER_ROLES;
