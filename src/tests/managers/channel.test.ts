import { test, expect } from 'bun:test';
import { ChannelFactory } from '../../classes/managers/ChannelFactory';
import botConfigs from '../../config';
import { MockClient } from '../MockClient';
import { ChannelManager } from 'discord.js';

const client = await new MockClient().login();

client.on('clientReady', async function exec() {
  test('Creates an instance of a ChannelManagerContract interface', function check() {
    const baseChannel = ChannelFactory.fromId(botConfigs.env.supportGuild.channelId, client);
    expect(baseChannel).not.toBeUndefined();
    expect(baseChannel?.type).not.toBeUndefined();
  });

  test("Creates an instance of a ChannelManager Object, from the channel factory's fromId method, and checks if it is an instance of a TextChannelManager, VoiceChannelManager or ThreadChannelManager", async function check() {
    const channel = ChannelFactory.fromId(botConfigs.env.supportGuild.channelId, client); // would be replaced with my main channel's id, once i set up my env
    expect(channel).not.toBeUndefined();
    expect(channel instanceof ChannelManager).toBe(true);
  });
});
