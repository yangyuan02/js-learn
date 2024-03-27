// 使用闭包实现单例模式的工厂函数  
function createSingleton() {  
    let instance; // 私有变量，用于存储单例对象  
  
    return function () {  
        // 如果单例对象尚未创建，则创建它  
        if (!instance) {  
            instance = new Singleton(); // 假设有一个Singleton类  
            // 可以在这里执行任何初始化逻辑  
        }  
        // 返回单例对象  
        return instance;  
    };  
}  
  
// 假设的Singleton类  
class Singleton {  
    constructor() {  
        // 构造函数逻辑  
        console.log('Singleton instance created');  
    }  
  
    someMethod() {  
        console.log('Some method of Singleton');  
    }  
}  
  
// 创建单例工厂的实例  
const getSingleton = createSingleton();  

// 导出单列在a,js,b.js中都是指向同一个类
export default getSingleton


// const createSingleStudioConnect = () => {
//     let studioConnector: StudioConnector = null;
//     return () =>
//       studioConnector ||
//       (studioConnector = new StudioConnector(CubeAppTypes.CubeStudio));
//   };
  
//   export const createCubeStudioConnect = createSingleStudioConnect();


  
// // 使用单例  
// const singleton1 = getSingleton(); // 创建单例对象（如果尚未创建）  
// const singleton2 = getSingleton(); // 返回已创建的单例对象  
  
// // 验证singleton1和singleton2是否为同一对象  
// console.log(singleton1 === singleton2); // 输出: true  
  
// // 调用Singleton的方法  
// singleton1.someMethod(); // 输出: Some method of Singleton  
// singleton2.someMethod(); // 输出: Some method of Singleton