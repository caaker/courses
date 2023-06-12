let queue = [];

// unshift can be considered enqueue
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);

// pop can be considered dequeue
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());