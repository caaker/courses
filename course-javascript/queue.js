// queue is a first in first out abstract data type
let queue = [];

// unshift can be considered enqueue - first in
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);

// pop can be considered dequeue - first out
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());