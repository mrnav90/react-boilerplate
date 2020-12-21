import io from 'socket.io-client';

// READ MORE API: https://socket.io/docs/client-api/

export default class SocketIOConnector {
  constructor(params) {
    this.socketClient = io(SOCKET_URL, {
      transports: ['websocket', 'polling', 'flashsocket'],
      query: params,
    });
  }

  subscribeListener() {
    if (this.socketClient) {
      this.socketClient.on('connect', () => {
        // connect socket success
      });

      this.socketClient.on('connect_error', () => {
        // socket connection error
      });

      this.socketClient.on('connect_timeout', () => {
        // connect socket timeout
      });

      this.socketClient.on('error', () => {
        // connect socket error
      });

      this.socketClient.on('disconnect', () => {
        // socket disconnect
      });

      this.socketClient.on('reconnect', () => {
        // socket reconnect
      });

      this.socketClient.on('reconnecting', () => {
        // socket reconnecting
      });

      this.socketClient.on('reconnect_attempt', () => {
        // socket reconnect_attempt
      });

      this.socketClient.on('reconnect_error', () => {
        // socket reconnect_error
      });

      this.socketClient.on('reconnect_failed', () => {
        // socket reconnect_failed
      });
    }
  }

  emit(event, data) {
    if (this.socketClient) {
      this.socketClient.emit(event, data);
    }
  }

  disconnect() {
    if (this.socketClient) {
      this.socketClient.disconnect();
    }
  }

  close() {
    if (this.socketClient) {
      this.socketClient.close();
    }
  }
}
