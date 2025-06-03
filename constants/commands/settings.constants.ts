export const SETTINGS_COMMANDS = {
  SETTINGS: { NAME: 'settings', DESCRIPTION: 'Generic command to display all settings and their options.' },
  SETTINGS_ADD: {
    NAME: 'settings add',
    DESCRIPTION: 'This command is used to append a value to a settings option that can take multiple multiple values',
  },
  SETTINGS_SET: { NAME: 'settings set', DESCRIPTION: '' },
} as const;
