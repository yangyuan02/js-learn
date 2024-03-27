// 定义服务接口  
interface MyService {  
  doSomething(): void;  
}  
  
// 服务实现  
class MyServiceImpl implements MyService {  
  doSomething(): void {  
    console.log('Doing something in MyServiceImpl...');  
  }  
}  
  
// 依赖注入器  
class Injector {  
  private readonly services: { [key: string]: any } = {};  
  
  // 注册服务  
  register<T>(serviceName: string, service: T): void {  
    this.services[serviceName] = service;  
  }  
  
  // 获取服务  
  get<T>(serviceName: string): T {  
    if (!this.services[serviceName]) {  
      throw new Error(`Service ${serviceName} is not registered.`);  
    }  
    return this.services[serviceName] as T;  
  }  
}  
  
// 消费者类  
class MyClass {  
  constructor(private myService: MyService) {  
    this.myService.doSomething();  
  }  
}  
  
// 使用依赖注入器  
const injector = new Injector();  
  
// 注册服务实现  
injector.register('MyService', new MyServiceImpl());  
  
// 获取服务并创建消费者类的实例  
const myClass = new MyClass(injector.get('MyService'));  
  
// 此时，MyClass 的实例将使用 MyServiceImpl 的实例作为其依赖项