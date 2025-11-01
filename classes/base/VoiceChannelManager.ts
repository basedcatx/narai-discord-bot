import { VoiceChannel } from "discord.js";
import { ChannelManagerContract } from "./contracts/ChannelManagerContract";

export class VoiceChannelManager implements ChannelManagerContract {
    private readonly channel: VoiceChannel;
    
    constructor(channel: VoiceChannel) {
        this.channel = channel;
    }

    public get name(): string {
        return this.channel.name
    }

    public get id(): string {
        return this.channel.id;
    }

    public async postSystemMessage(content: string): Promise<void> {
        await this.channel.send({content}) /* Alot to work on later */
    }

    public isPostable(): boolean {
        return this.channel.isSendable()
    }
}