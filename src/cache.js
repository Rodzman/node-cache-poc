class Cache {
    constructor(limit = Infinity) {
      this.values = new Map();
      this.order = new Set();
      this.limit = limit;
    }
  
    updateOrder(key) {
      if (this.order.has(key)) {
        this.order.delete(key);
      }
      this.order.add(key);
    }
  
    view() {
      console.log("ORDER > ", this.order);
      console.log("VALUES > ", this.values);
    }
  
    get(key) {
      if (!this.values.has(key)) return null;
      this.updateOrder(key);
      return this.values.get(key);
    }
  
    put(key, value) {
      this.values.set(key, value);
      this.updateOrder(key);
  
      if (this.values.size > this.limit) {
        const leastViewed = [...this.order][0];
        this.order.delete(leastViewed);
        this.values.delete(leastViewed);
      }
    }
  }

  module.exports = Cache;