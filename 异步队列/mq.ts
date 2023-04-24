/**
 * Mq 校验消息队列
 * @description 用于管理业务侧调用的校验行为
 * 业务侧只需要发送校验指令，校验行为触发实际、顺序等由消息队列管理执行
 */
export class Mq<T> {
    // 队列
    private queue: Array<T> = [];
  
    /**
     * trigger
     * @public 触发队列依次调用
     * @param callback 迭代队列项时的回调函数
     * @param { T } callback.task 第一个参数是迭代的当前队列项数据
     * @param { Function } callback.done 第二个参数是开始执行队列下一项
     * @returns Promise<void> 表示消息队列最终执行完毕
     */
    public trigger(callback: IMqTriggerCallback<T>): Promise<void> {
      return new Promise((resolve: Function) => {
        if (!this.size()) return resolve();
  
        const next = () => {
          if (this.size()) {
            if (typeof callback === 'function') {
              const task = this.queue.shift();
              callback(task, next);
            } else {
              next();
            }
          } else {
            resolve();
          }
        };
  
        next();
      });
    }
  
    /**
     * add
     * @description 新增消息项
     * @param params 消息项数据
     * @returns this
     */
    public add(params: T): Mq<T> {
      this.queue.push(params);
      return this;
    }
  
    /**
     * clear
     * @description 清空消息队列
     * @returns this
     */
    public clear(): Mq<T> {
      this.queue = [];
      return this;
    }
  
    /**
     * remove
     * @description 移除指定条件的消息队列项
     * @param pattern 参数为函数，则根据函数执行结果为true时进行删除；为number时则删除指定位置的项
     * @returns this
     */
    public remove(pattern: ((task: T) => boolean) | number): Mq<T> {
      if (typeof pattern === 'function') {
        this.queue = this.queue.filter((task) => !pattern(task));
      } else if (typeof pattern === 'number') {
        this.queue.splice(pattern, 1);
      }
      return this;
    }
  
    /**
     * get
     * @description 根据下标获取队列中的消息项
     * @returns 返回目标消息项数据
     */
    public get(index: number): T {
      return this.queue[index];
    }
  
    /**
     * size
     * @description 获取消息队列中消息数量
     * @returns 返回消息数量
     */
    public size(): number {
      return this.queue.length;
    }
  }