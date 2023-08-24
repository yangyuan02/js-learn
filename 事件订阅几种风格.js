https://mp.weixin.qq.com/s?__biz=MzI0NTc2NTEyNA==&mid=2247486564&idx=1&sn=f337269638f2875c9194d6c81cabc515&chksm=e948c90fde3f40192d0a6dd0a4f8e503da300a27f76923c3bf9b28b57518388dc88db7aaf7e1&scene=21#wechat_redirect

const bindEvent = (target, eventName, handler) => {
    target.addEventListener('resize', handler); // 绑定
    return () => {
     target.removeEventListener('resize', handler); // 取消
    }
  }
  
  const unBindEvent = bindEvent(window, 'resize', handler); // 封装的绑定
  unBindEvent(); // 封装的取消

  // id, nodeEvent等

  class KeyBindingManager {
      // 用 Map 
      private keyBindingMap = new Map<number, IKeyBinding>();
      private id = 0;
      
      //...
     
      // 注册一个快捷键
      register(keybinding: IKeyBinding) {
        const id = this.id;
        this.keyBindingMap.set(id, keybinding);
    
        this.id++;
        return id;
      }
      
      // 注销快捷键
      unregister(id: number) {
        this.keyBindingMap.delete(id);
      }
    }
    