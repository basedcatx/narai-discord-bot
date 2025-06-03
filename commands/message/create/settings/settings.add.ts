import { TIMEOUTS } from '../../../../constants/constants';
import { Message } from 'discord.js';
import { ClientWithExtendedTypes } from '../../../../types/types';
import ArgTokenizer from '../../../../utils/ArgTokenizer';
import { SETTINGS_COMMANDS } from '../../../../constants/commands/settings.constants';

const command = {
  name: SETTINGS_COMMANDS.SETTINGS_ADD.NAME,
  description: SETTINGS_COMMANDS.SETTINGS_ADD.DESCRIPTION,
  cooldown: TIMEOUTS.HELP_TIMEOUT,
  execute: async function (client: ClientWithExtendedTypes, msg: Message) {
    const msgTokens = ArgTokenizer(msg);
    let commandIndexOffset = msgTokens.indexOf(SETTINGS_COMMANDS.SETTINGS_ADD.NAME);
    const option = msgTokens[commandIndexOffset++];
    const value = msgTokens[commandIndexOffset];
    console.log(option, value);
  },
};

export default command;
