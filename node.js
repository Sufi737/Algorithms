class Node {
    constructor(value=null, prev=null, next=null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    getValue() {
        return this.value;
    }

    getNextNode() {
        return this.next;
    }

    getPrevNode() {
        return this.prev;
    }
}

class SinglyLinkedList {
    constructor(value = null) {
        this.head = new Node(value, null, null); //setting the first node as head node
        this.tail = this.head;
    }

    isEmpty() {
        if (this.head == null) return true;
        return false; 
    }

    addNode(value = null) {
        let lastNode = new Node(value, null, null);
        this.tail.next = lastNode;
        this.tail = lastNode;
    }

    addToHead(value = null) {
        let newNode = new Node(value, null, this.head);
        this.head = newNode;
    }

    addAfterNode(searchValue, value=null) {
        if (this.tail.value === searchValue) {
            this.addNode(value);
        } else {
            let tailReached = false;
            let currentNode = this.head;
            while(!tailReached) {
                if (currentNode.value === searchValue) {
                    let nextNode = currentNode.next;
                    let newNode = new Node(value, null, nextNode);
                    newNode.next = nextNode;
                    currentNode.next = newNode;
                    break;
                }
                if (currentNode === this.tail) {
                    tailReached = true;
                } else {
                    currentNode = currentNode.next;
                }
            }
            if (tailReached) {
                console.log("The given value could not be found in the list");
            }
        }
    }

    deleteNode(searchValue) {
        if (this.head.value === searchValue) {
            //update head
            let newHead = this.head.next;
            this.head = newHead;
            console.log("Head updated!");
        } else {
            //keeping 2 pointers to keep track of previous node
            let currentNode = this.head.next;
            let nextNode = this.head.next.next;
            while (true) {
                if (currentNode == null) {
                    console.log("Value not found");
                    return;
                } else if (nextNode.value === null) {
                    if (currentNode.value === searchValue) {
                        //this is the tail node and we need to update the tail
                        currentNode.next = null;
                        this.tail = currentNode;
                        console.log("Tail updated!");
                    } else {
                        console.log("Value not found");
                    }
                    return; 
                } else {
                    if (nextNode.value === searchValue) {
                        if (this.tail === nextNode) {
                            //update the tail
                            currentNode.next = null;
                            this.tail = currentNode;
                            console.log("Tail updated!");
                        } else {
                            let newNext = nextNode.next;
                            currentNode.next = newNext;
                            console.log("Node removed");
                        }
                        return;
                    } else {
                        currentNode = nextNode;
                        nextNode = nextNode.next;
                    }
                }
            }
        }
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    toArray() {
        //shows all the nodes in sequence
        let valuesList = [];
        let tailReached = false;
        let currentNode = this.head;
        while(!tailReached) {
            valuesList.push(currentNode.value);
            if (currentNode === this.tail) {
                tailReached = true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return valuesList;
    }
}

class DoublyLinkedList {
    constructor (value=null) {
        let headNode = new Node(value, null, null);
        this.head = headNode;
        this.tail = headNode;
    }

    addNode(value=null) {
        let endNode = new Node(value, this.tail, null);
        this.tail.next = endNode;
        this.tail = endNode;
    }

    isEmpty() {
        if (this.head == null) return true;
        return false; 
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    toArray() {
        //shows all the nodes in sequence
        let valuesList = [];
        let tailReached = false;
        let currentNode = this.head;
        while(!tailReached) {
            valuesList.push(currentNode.value);
            if (currentNode === this.tail) {
                tailReached = true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return valuesList;
    }
    printReverse() {
        //shows all the nodes in reverse order
        let currentNode = this.tail;
        let headReached = false;
        let reverseArray = [];
        while (!headReached) {
            reverseArray.push(currentNode.value);
            if (currentNode === this.head) {
                headReached = true;
            }
            currentNode = currentNode.prev;
        }
        return reverseArray;
    }

    addToHead(value) {
        let newNode = new Node(value, null, this.head);
        this.head.prev = newNode;
        this.head = newNode;
    }

    addAfterNode(searchValue, value=null) {
        if (this.tail.value === searchValue) {
            this.addNode(value);
        } else {
            let tailReached = false;
            let currentNode = this.head;
            while(!tailReached) {
                if (currentNode.value === searchValue) {
                    let nextNode = currentNode.next;
                    let newNode = new Node(value, currentNode, nextNode);
                    // newNode.next = nextNode;
                    currentNode.next = newNode;
                    nextNode.prev = newNode;
                    break;
                }
                if (currentNode === this.tail) {
                    tailReached = true;
                } else {
                    currentNode = currentNode.next;
                }
            }
            if (tailReached) {
                console.log("The given value could not be found in the list");
            }
        }
    }

    deleteNode(searchValue) {
        if (this.head.value === searchValue) {
            this.head = this.head.next; //updating head node
        } else if (this.tail.value === searchValue) {
            this.tail = this.tail.prev; //set previous node as tail
        } else {
            let currentNode = this.head.next; //starting from 2nd node
            let tailReached = false;
            while (!tailReached) {
                if (currentNode.value === searchValue) {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
                if (this.tail === currentNode) {
                    tailReached = true;
                }
                currentNode = currentNode.next;
            }
        }
    }
}

let dll = new DoublyLinkedList(1);
dll.addNode(2);
dll.addNode(3);
dll.addToHead(4);
dll.addToHead(5);
dll.addAfterNode(3, 11);
dll.addAfterNode(4, 12);
console.log(dll.toArray());
console.log(dll.printReverse());
dll.deleteNode(4);
dll.deleteNode(11);
dll.deleteNode(2);
console.log(dll.toArray());
console.log(dll.printReverse());