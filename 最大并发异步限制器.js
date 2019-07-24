class Scheduler {
  constructor(max = 2) {
    this.max = max;
    this.list = [];
    this.running = {};
  }
  add(promiseCreator) {
    let res = null;
    const p = new Promise(r => {
      res = r;
    });
    this.list.push({
      promiseCreator,
      res
    });
    this.next();
    return p;
  }
  next() {
    while (this.list.length && this.running < this.max) {
      const { promiseCreator, res } = this.list.shift();
      promiseCreator().then(val => {
        this.running--;
        res(val);
        this.next();
      });
      this.running++;
    }
  }
}
