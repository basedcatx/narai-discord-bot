/*
 * This class has nothing to deal with multi-threading.
 * Discord has this in-channel threads where you can diverge with specific discussions, not to flood the main chat.
 * We leverage this feature to create different game threads per lobby.
 */

export class ThreadManager {
  // Threads are sub-channels, so every channel can have it's own individual list of threads.
  private readonly channelId: string;
  private threadId: string;

  constructor(channelId: string) {
    this.channelId = channelId;
  }

  async postSystemMessage(content: string) {}

  //
}
