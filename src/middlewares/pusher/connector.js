import PusherJS from 'pusher-js';

export default class PusherConnector {
  constructor(identity, memberInfo = {}) {
    this.pusherClient = this.init(identity, memberInfo);
    this.privateChannel = null;
  }

  init(identity, memberInfo = {}) {
    const config = {
      cluster: 'ap1',
      encrypted: true,
      authTransport: 'ajax',
    };
    if (identity) {
      return new PusherJS(PUSHER_APP_KEY, {
        ...config,
        authEndpoint: `${API_URL}pusher/auth-presence-channel`,
        auth: {
          params: {
            identity,
            member_info: JSON.stringify(memberInfo),
          },
        },
      });
    }
    return new PusherJS(PUSHER_APP_KEY, {
      ...config,
      authEndpoint: `${API_URL}pusher/auth`,
    });
  }

  handlePusherEvent() {
    if (this.pusherClient) {
      this.pusherClient.connection.bind('error', error => {
        console.error(error);
      });
      this.pusherClient.connection.bind('connected', () => {
        // connected
      });
      this.pusherClient.connection.bind('disconnected', () => {
        // disconnected
      });
    }
  }

  subscribeChannel(channel, prefix) {
    if (this.pusherClient) {
      const channelName = prefix ? `${prefix}-${channel}` : channel;
      const channelSubscribe = this.pusherClient.subscribe(channelName);
      channelSubscribe.bind('pusher:subscription_succeeded', () => {
        // handle subscribe success
      });
      channelSubscribe.bind('pusher:subscription_error', () => {
        this.presenceChannel(channel);
      });
      this.privateChannel = channelSubscribe;
    }
  }

  trigger(event, data) {
    if (this.pusherClient && this.privateChannel) {
      this.privateChannel.trigger('client-events', {
        event,
        ...data,
      });
    }
  }

  disconnect() {
    if (this.pusherClient) {
      this.pusherClient.disconnect();
    }
  }
}
