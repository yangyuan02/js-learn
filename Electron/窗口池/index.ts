import { BrowserWindow, app, BrowserWindowConstructorOptions } from 'electron';
import path from 'path';

class WindowPool {
  private readonly POOL_SIZE = 5; // 设置窗口池大小
  private pool: BrowserWindow[] = [];
  private options: BrowserWindowConstructorOptions;
  private windowAllClosed = false;

  constructor(options: BrowserWindowConstructorOptions) {
    this.options = options;
    for (let i = 0; i < this.POOL_SIZE; i++) {
      const window = this.createAndHideWindow();
      this.pool.push(window);
    }
    
    // 监听应用的所有窗口关闭事件
    app.on('window-all-closed', () => {
      this.windowAllClosed = true;
      this.dispose();
    });
  }

  private createAndHideWindow(): BrowserWindow {
    const window = new BrowserWindow(this.options);
    window.loadURL(`file://${__dirname}/preload.html`);
    window.once('ready-to-show', () => window.hide()); // 确保页面加载完成后隐藏
    return window;
  }

  acquireWindow(): BrowserWindow | undefined {
    if (this.pool.length > 0 && !this.windowAllClosed) {
      const window = this.pool.shift();
      window.once('close', () => this.releaseWindow(window)); // 添加关闭事件监听，确保窗口被正确回收
      window.show();
      return window;
    }
    return undefined;
  }

  releaseWindow(window: BrowserWindow): void {
    if (!this.windowAllClosed) {
      window.loadURL(`file://${__dirname}/preload.html`);
      window.hide();
      this.pool.push(window);
    } else {
      window.destroy(); // 若所有窗口已关闭，则直接销毁
    }
  }

  dispose(): void {
    this.pool.forEach((window) => window.destroy());
    this.pool = [];
  }
}

// 使用示例
const windowPoolOptions: BrowserWindowConstructorOptions = {
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    // 其他web偏好设置
  },
};

const windowPool = new WindowPool(windowPoolOptions);

app.whenReady().then(() => {
  // 当需要时获取一个窗口
  const windowToUse = windowPool.acquireWindow();
  if (windowToUse) {
    // 在这里切换到实际的业务页面
    windowToUse.loadURL('https://your-actual-page.com');
  }
});

// 不再需要窗口时，直接关闭即可，因为已经绑定了关闭事件监听器
// windowToUse.on('close', () => windowPool.releaseWindow(windowToUse));