abstract class AbstractMessage {
  protected messageSender: IMessageSender;
  constructor (messageSender: IMessageSender) {
    this.messageSender = messageSender;
  }
  abstract Send(message: string): void;
}

interface IMessageSender {
  sendMessage(message: string): void;
}

class SmsMessageSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log(`Sending message: ${message} using SMS`);
  }
}

class EmailMessageSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log(`Sending email: ${message} using Email`);
  }
}

class LongMessage extends AbstractMessage {
  Send(message: string): void {
    this.messageSender.sendMessage(message);
  }
}


const sendLongMessage = new LongMessage(new SmsMessageSender());
sendLongMessage.Send('Hello, this is a long message');
sendLongMessage.Send('Hello, this is a long message');