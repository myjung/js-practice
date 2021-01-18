function Queue() {
    this.head = null;
    this.last = null;
    this.size = 0;
}

Queue.prototype.enqueue = function (data) {
    if (this.size == 0) {
        this.head = {
            data,
            next: null
        };
        this.last = this.head;
        this.size++;
    } else {
        const newData = {
            data,
            next: null
        };
        this.last.next = newData;
        this.last = newData;
        this.size++;
    }
}

Queue.prototype.dequeue = function () {
    if (this.size == 0) {
        return undefined;
    } else {
        this.size--;
        let returnValue = this.head;
        if (this.size == 1) this.last = null;
        this.head = this.head.next;
        return returnValue.data;
    }
}

Queue.prototype.peek = function () {
    return this.head == null ? undefined : this.head.data;
}

function DoubleStackQueue() {
    this.inbox = [];
    this.outbox = [];
}

DoubleStackQueue.prototype.enqueue = function (data) {
    this.inbox.push(data);
}

DoubleStackQueue.prototype.dequeue = function () {
    if (this.outbox.length == 0) {
        while (this.inbox.length !== 0) {
            this.outbox.push(this.inbox.pop());
        }
    } else {
        return this.outbox.pop();
    }
}

const myQueue = new Queue();
myQueue.enqueue("first");
myQueue.enqueue("second");
myQueue.enqueue("third");
myQueue.enqueue("fourth");

console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());

function testQueue(n) {
    const queueInstance = new Queue();
    for (let i = 0; i < n; i++) {
        queueInstance.enqueue(i);
    }

    for (let i = 0; i < n; i++) {
        queueInstance.dequeue();
    }
    return queueInstance;
}

function testDoubleStack(n) {
    const queueInstance = new DoubleStackQueue();
    for (let i = 0; i < n; i++) {
        queueInstance.enqueue(i);
    }

    for (let i = 0; i < n; i++) {
        queueInstance.dequeue();
    }
    return queueInstance;
}

function testList(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    for (let i = 0; i < n; i++) {
        arr.shift();
    }
    return arr;
}

const timeCheck = (func, ...rest) => {
    let time = new Date();
    func(...rest);
    let end = new Date();
    console.log(`${func}는 실행에 ${rest}를 전달받아 ${end - time}밀리초 걸렸습니다.`)
}

timeCheck(testQueue, 50000000);
timeCheck(testList, 50000);
timeCheck(testDoubleStack, 50000000);