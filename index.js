const Cache = require('./src/cache');

// TESTS
const cache = new Cache(3);

cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);

console.log(cache.get("a"));
console.log(cache.get("a"));
console.log(cache.get("a"));
console.log(cache.get("a"));
console.log(cache.get("a"));

cache.put("d", 4);
cache.put("e", 5);

console.log(cache.get("a"));
console.log(cache.get("d"));
console.log(cache.get("g"));

cache.put("e", 5);
cache.put("e", 5);
cache.put("e", 5);

console.log(cache.get("g"));
for (let i = 0; i < 1000; i++) {
  cache.put("a", 2);
}
console.log(cache.get("d"));

cache.view();
