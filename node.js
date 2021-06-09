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


let singlyLL = new SinglyLinkedList(3);
singlyLL.addNode(7);
singlyLL.addNode(10);
singlyLL.addNode(13);
singlyLL.addToHead(19);
singlyLL.addAfterNode(7, 8);
singlyLL.addAfterNode(13,14);
singlyLL.addAfterNode(19,20);
console.log(singlyLL.toArray());
singlyLL.deleteNode(13);
console.log(singlyLL.toArray());
singlyLL.deleteNode(19);
console.log(singlyLL.toArray());
singlyLL.deleteNode(14);
console.log(singlyLL.toArray());
console.log(singlyLL.getHead());
console.log(singlyLL.getTail());