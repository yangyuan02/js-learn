import { Log } from 'electron-log';

// 日志接口，定义基础日志方法
interface ILogger {
  info(message: string, ...meta: any[]): void;
  warn(message: string, ...meta: any[]): void;
  error(message: string, error?: Error, ...meta: any[]): void;
  debug(message: string, ...meta: any[]): void;
}

// 基础日志类实现ILogger接口
class BaseLogger implements ILogger {
  protected readonly log: Log;

  constructor(componentName: string) {
    this.log = Log.scope(componentName);
  }

  public info(message: string, ...meta: any[]): void {
    this.log.info(message, ...meta);
  }

  public warn(message: string, ...meta: any[]): void {
    this.log.warn(message, ...meta);
  }

  public error(message: string, error?: Error, ...meta: any[]): void {
    if (error) {
      this.log.error(`${message}:`, error, ...meta);
    } else {
    this.log.error(message, ...meta);
    }
  }

  public debug(message: string, ...meta: any[]): void {
    this.log.debug(message, ...meta);
  }
}

// 装饰者模式：日志存储装饰者
class FileSavingDecorator implements ILogger {
  private readonly baseLogger: ILogger;

  constructor(baseLogger: ILogger, filePath: string) {
    this.baseLogger = baseLogger;
    this.initFileSaving(filePath);
  }

  private initFileSaving(filePath: string): void {
    // 这里可以使用 electron-log 的 saveToFile 方法或者其他方式将日志保存到文件
    // 此处仅为示意，实际情况需实现具体保存逻辑
  }

  // 重写并增强原有的日志方法
  public info(message: string, ...meta: any[]): void {
    this.baseLogger.info(message, ...meta);
    // 在这里可以添加额外的逻辑，例如保存到文件
  }

  // 同样重写其他日志方法
  public warn(message: string, ...meta: any[]): void {...}
  public error(message: string, error?: Error, ...meta: any[]): void {...}
  public debug(message: string, ...meta: any[]): void {...}
}

// 使用示例
const baseLogger = new BaseLogger('MyApp');
const fileSavingLogger = new FileSavingDecorator(baseLogger, './app.log');

fileSavingLogger.info('Application started');