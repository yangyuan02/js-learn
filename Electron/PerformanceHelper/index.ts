class PerformanceHelper {
    private marks: Map<string, PerformanceEntry> = new Map();
  
    /**
     * 创建一个性能标记
     * @param name 标记名称
     */
    public mark(name: string): void {
      performance.mark(name);
      this.marks.set(name, performance.getEntriesByName(name)[0]);
    }
  
    /**
     * 设置结束标记并计算两个标记之间的持续时间
     * @param start 开始标记名称
     * @param end 结束标记名称
     * @returns 持续时间（毫秒），如果找不到标记则返回null
     */
    public measure(start: string, end: string): number | null {
      const startEntry = this.marks.get(start);
      const endEntry = this.marks.get(end);
  
      if (!startEntry || !endEntry) {
        console.warn('One or both marks not found.');
        return null;
      }
  
      performance.measure(end, start);
      const measureEntry = performance.getEntriesByName(end).find(e => e.entryType === 'measure') as PerformanceMeasure | undefined;
      return measureEntry ? measureEntry.duration : null;
    }
  
    /**
     * 清除所有已创建的标记和度量
     */
    public clear(): void {
      this.marks.forEach((entry, name) => {
        performance.clearMarks(name);
      });
      performance.clearMeasures();
      this.marks.clear();
    }
  }
  
  // 使用示例
  const perfHelper = new PerformanceHelper();
  
  // 创建标记
  perfHelper.mark('start');
  // 执行耗时操作
  doSomeHeavyWork();
  perfHelper.mark('end');
  
  // 计算并打印持续时间
  const duration = perfHelper.measure('start', 'end');
  console.log(`Duration: ${duration} ms`);
  
  // 清除所有标记
  perfHelper.clear();