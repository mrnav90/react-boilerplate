// READ MORE: https://javascript.info/websocket

export default class WebSocketConnector {
  constructor() {
    this.socketClient = new WebSocket(SOCKET_URL);
  }

  subscribeListener() {
    if (this.socketClient) {
      this.socketClient.on('open', () => {
        // connect websocket success
      });

      this.socketClient.on('error', () => {
        // connect websocket error
      });

      this.socketClient.on('close', () => {
        // websocket close
      });
    }
  }

  emit(data) {
    if (this.socketClient) {
      this.socketClient.send(data);
    }
  }

  disconnect() {
    if (this.socketClient) {
      this.socketClient.close();
    }
  }
}
