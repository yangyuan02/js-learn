type SocketClientOptions = {
    // 最大重新连接延迟
    maxReconnectionDelay: number;
    // 最小重新连接延迟
    minReconnectionDelay: number;
    // 重新连接延迟增长系数
    reconnectionDelayGrowthFactor: number;
    // 连接超时
    connectionTimeout: number;
    // 最大重试次数
    maxRetries: number;
    // 最大排队消息数量
    maxEnqueuedMessages: number;
    // 是否打印日志
    debug: boolean;
  }
  
  type Message = string | ArrayBuffer | Blob | ArrayBufferView;
  
  const isWebSocket = (w: WebSocket) => typeof w !== 'undefined' && !!w && w.CLOSING === 2;
  
  export default class SocketClient {
    private socket: WebSocket;
  
    private connectLock = false;
  
    private shouldReconnect = true;
  
    private retryCount = -1;
  
    private connectTimeout: NodeJS.Timeout;
  
    private messageQueue: Message[] = [];
  
    private readonly options: SocketClientOptions = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000 + Math.random() * 4000,
      reconnectionDelayGrowthFactor: 1.3,
      connectionTimeout: 4000,
      maxRetries: Infinity,
      maxEnqueuedMessages: Infinity,
      debug: true,
    };
  
    private get socketExists() {
      return !!this.socket;
    }
  
    constructor(public url: string, options: Partial<SocketClientOptions> = {}) {
      this.options = { ...this.options, ...options };
      this.connect();
    }
  
    public onmessage: ((event: MessageEvent) => void) = null;
  
    public onopen: ((event: Event) => void) = null;
  
    public onclose: ((event: Event) => void) = null;
  
    public onerror: ((event: ErrorEvent) => void) = null;
  
    public close(code = 1000, reason?: string) {
      this.shouldReconnect = false;
      this.clearTimeouts();
      this.removeListeners();
      if (!this.socketExists) {
        this.debugLog('Close ws fail: no ws instance');
        return;
      }
      if (this.socket.readyState === WebSocket.CLOSED) {
        this.debugLog('Close ws fail: ws instance already closed');
        return;
      }
      this.socket.close(code, reason);
      this.socket = null;
    }
  
    public reconnect() {
      this.shouldReconnect = true;
      this.retryCount = -1;
      if (this.socket && this.socket.readyState !== WebSocket.CLOSED) this.disconnect();
      this.connect();
    }
  
    private disconnect(code = 1000, reason?: string) {
      if (!this.socketExists) return;
      this.clearTimeouts();
      this.removeListeners();
      this.socket.close(code, reason);
    }
  
    private debugLog(...args: any[]) {
      if (this.options.debug) console.log.apply(console, ['SocketClient>>>', ...args]);
    }
  
    private getNextReconnectionDelay() {
      const { reconnectionDelayGrowthFactor, minReconnectionDelay, maxReconnectionDelay } = this.options;
  
      if (this.retryCount <= 0) return 0;
  
      const delay = minReconnectionDelay * (reconnectionDelayGrowthFactor ** (this.retryCount - 1));
  
      if (delay > maxReconnectionDelay) return maxReconnectionDelay;
  
      return delay;
    }
  
    private wait(): Promise<void> {
      return new Promise((resolve) => {
        const delay = this.getNextReconnectionDelay();
        setTimeout(resolve, delay);
      });
    }
  
    private async connect() {
      if (this.connectLock || !this.shouldReconnect) return;
  
      this.connectLock = true;
  
      const { maxRetries, connectionTimeout } = this.options;
  
      if (this.retryCount > maxRetries) {
        this.debugLog('Max retries reached', this.retryCount, '>=', maxRetries);
        return;
      }
  
      this.retryCount++;
  
      this.debugLog('Current connect retryCount:', this.retryCount);
  
      if (!isWebSocket) {
        throw Error('SocketClient>>> No valid WebSocket class provided');
      }
  
      this.debugLog('Connect url:', { url: this.url });
  
      await this.wait();
  
      try {
        this.socket = new WebSocket(this.url);
        this.addListeners();
      } catch (e) {
        this.debugLog('Connect socket error:', e);
      } finally {
        this.connectLock = false;
        this.connectTimeout = setTimeout(this.handleTimeout, connectionTimeout);
      }
    }
  
    private handleTimeout = () => {
      this.debugLog('Connection to socket timed out，reconnecting');
      this.handleError(new ErrorEvent('TIMEOUT'));
    }
  
    private handleOpen = (event: Event) => {
      this.debugLog('Connection to socket successful');
      clearTimeout(this.connectTimeout);
      this.resetRetryCount();
      this.messageQueue.forEach((message) => this.send(message));
      this.messageQueue = [];
      if (this.onopen) this.onopen(event);
    }
  
    private handleMessage = (event: MessageEvent) => {
      this.debugLog('Received message');
      if (this.onmessage) this.onmessage(event);
    }
  
    private handleError = (event: ErrorEvent) => {
      this.debugLog('Error event:', event);
      this.disconnect(undefined, event.type === 'TIMEOUT' ? 'connection timeout' : undefined);
      if (this.onerror) this.onerror(event);
      this.connect();
    }
  
    private handleClose = (event: Event) => {
      this.debugLog('Close event:', event);
      this.clearTimeouts();
      if (this.shouldReconnect) this.connect();
      if (this.onclose) this.onclose(event);
    }
  
    public send(message: Message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      } else if (this.messageQueue.length < this.options.maxEnqueuedMessages) {
        this.debugLog('Enqueue message');
        this.messageQueue.push(message);
      }
    }
  
    private resetRetryCount() {
      this.retryCount = 0;
    }
  
    private addListeners() {
      if (!this.socketExists) return;
      this.socket.addEventListener('open', this.handleOpen);
      this.socket.addEventListener('message', this.handleMessage);
      this.socket.addEventListener('close', this.handleClose);
      this.socket.addEventListener('error', this.handleError);
    }
  
    private removeListeners() {
      if (!this.socketExists) return;
      this.socket.removeEventListener('open', this.handleOpen);
      this.socket.removeEventListener('message', this.handleMessage);
      this.socket.removeEventListener('close', this.handleClose);
      this.socket.removeEventListener('error', this.handleError);
    }
  
    private clearTimeouts() {
      clearTimeout(this.connectTimeout);
    }
  }
  

const socket = new SocketClient(`${this.servicePath}?client=studioPage&browserId=${browserWindowId}`);

socket.onopen = () => {

};

socket.onmessage = (event: MessageEvent) => {
};

socket.send({age:'22'})
