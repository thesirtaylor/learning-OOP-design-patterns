import { IMessageClient } from "./adapter.interface";

//Adaptee <implement slack client>
export class SlackClient {
  postMessageToUserInChannel(user: string, message: string, channel: string) {
    return `Posting message to user ${user}, in Slack channel ${channel}: ${message}`;
  }
}

//Adapter
export class SlackAdapter implements IMessageClient {
  constructor(private slackClient: SlackClient) {}

  sendMessage(channel: string, user: string, message: string): void {
    this.slackClient.postMessageToUserInChannel(user, message, channel);
    console.log(this.slackClient.constructor.name);
  }
}

//Adaptee2 <implement MS team client>
export class MsTeamsClient {
  PostToChannel(channel: string, message: string) {
    return `Posting message to ${channel} through MS Teams: ${message}`;
  }
}

//Adapter2
export class MsTeamsAdapter implements IMessageClient {
  constructor(private msTeamsClient: MsTeamsClient) {}

  sendMessage(channel: string, user: string, message: string): void {
    this.msTeamsClient.PostToChannel(channel, `${message} (sent to ${user})`);
  }
}

/**
 * In this example, both the Slack and MS Teams clients have different interfaces (postMessageToUserInChannel for Slack, postToChannel for MS Teams) than what our system expects (sendMessage).
 * So we create adapters (SlackAdapter and MSTeamsAdapter) that implement IMessageClient and delegate calls to the respective client’s method.
 * This way, our system can work with both Slack and MS Teams in a seamless way.
 */
