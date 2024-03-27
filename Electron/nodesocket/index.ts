import WebSocket from 'ws';

abstract class WebSocketServerBase {
  protected server: WebSocket.Server;

  constructor(port: number) {
    this.server = new WebSocket.Server({ port });

    this.initializeEvents();
  }

  protected initializeEvents() {
    this.server.on('connection', (ws: WebSocket) => {
      this.handleNewClientConnected(ws);
      this.setupMessageHandler(ws);
      this.handleClientDisconnection(ws);
    });
  }

  protected handleNewClientConnected(ws: WebSocket) {
    console.log('New client connected!');
  }

  protected handleClientDisconnection(ws: WebSocket) {
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  }

  // 抽象方法，要求子类必须实现
  protected abstract handleMessage(data: string): void;

  private setupMessageHandler(ws: WebSocket) {
    ws.on('message', (message: string) => {
      this.handleMessage(message);
    });
  }
}

class CustomWebSocketServer extends WebSocketServerBase {
  constructor(port: number) {
    super(port);
  }

  // 子类实现抽象方法
  protected handleMessage(data: string): void {
    const parsedData = JSON.parse(data);

    switch (parsedData.action) {
      case 'greeting':
        ws.send(`Hello, ${parsedData.name}!`);
        break;
      case 'request':
        // 处理请求并返回响应
        const response = processRequest(parsedData.requestData);
        ws.send(JSON.stringify({ response }));
        break;
      default:
        ws.send(`Invalid action received: ${parsedData.action}`);
    }
  }
}

// 创建自定义WebSocket服务器实例
const customWss = new CustomWebSocketServer(8080);