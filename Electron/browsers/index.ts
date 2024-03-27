import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

// 窗口接口，用于统一窗口操作
interface IWindow {
  create: () => void;
  close: () => void;
  getWindow: () => BrowserWindow | null;
}

// 窗口抽象工厂类
abstract class WindowFactory {
  abstract createWindow(options: BrowserWindowConstructorOptions): IWindow;
}

// 具体窗口类实现
class ConcreteWindow implements IWindow {
  private windowInstance: BrowserWindow | null = null;

  constructor(private options: BrowserWindowConstructorOptions) {}

  create() {
    this.windowInstance = new BrowserWindow(this.options);
    this.windowInstance.loadURL(`file://${__dirname}/index.html`);
    this.windowInstance.on('closed', () => {
      this.windowInstance = null;
    });
  }

  close() {
    if (this.windowInstance) {
      this.windowInstance.close();
    }
  }

  getWindow() {
    return this.windowInstance;
  }
}

// 窗口工厂类实现
class WindowManagerFactory extends WindowFactory {
  createWindow(options: BrowserWindowConstructorOptions): IWindow {
    return new ConcreteWindow(options);
  }
}

// 单例窗口管理器
class SingletonWindowManager {
  private static instance: SingletonWindowManager | null = null;
  private windowManager: IWindow | null = null;

  private constructor(windowFactory: WindowFactory) {
    this.windowManager = windowFactory.createWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });
    this.windowManager.create();
  }

  static getInstance(windowFactory: WindowFactory): SingletonWindowManager {
    if (!SingletonWindowManager.instance) {
      SingletonWindowManager.instance = new SingletonWindowManager(windowFactory);
    }
    return SingletonWindowManager.instance;
  }

  public closeWindow() {
    if (this.windowManager) {
      this.windowManager.close();
    }
  }

  public getWindow(): BrowserWindow | null {
    return this.windowManager?.getWindow();
  }
}

// 使用示例
const windowFactory = new WindowManagerFactory();
const windowManager = SingletonWindowManager.getInstance(windowFactory);

// 在应用程序启动时创建窗口
windowManager.getWindow(); // 获取窗口实例

// 当需要关闭窗口时
windowManager.closeWindow();