class PriorityQueue {
    constructor (size) {
        this.maxSize = size === null ? 1 : size;
        this.queue = [];
    }

    add (value) {
        if (this.queue.length >= this.maxSize) {
            console.log("Queue max size reached");
            return false;
        } else {
            this.queue.push(value);
            let currentIndex = this.queue.length-1;
            //check if this is the root node
            if (this.queue.length !== 1) {
                let parent = this.getParentNode(currentIndex);
                //check for min heap property
                if (value < this.queue[parent]) {
                    //heap invalid
                    this.swim(parent, currentIndex);
                }
            }
            return true;
        }
    }

    swim (parentIndex, childIndex) {
        //swap the nodes
        let temp = this.queue[childIndex];
        this.queue[childIndex] = this.queue[parentIndex];
        this.queue[parentIndex] = temp;
        if (parentIndex === 0) {
            //root node swapped, stop here
            return true;
        } else {
            //check for min heap after swap 
            childIndex = parentIndex;
            parentIndex = this.getParentNode(parentIndex);
            if (this.queue[childIndex] < this.queue[parentIndex]) {
                this.swim(parentIndex, childIndex)
            }
            return true;
        }
    }

    getParentNode (childIndex) {
        // returns the index of teh parent node
        if (childIndex === 0) {
            console.log("Dont pass root node");
            return false;
        }
        let parentIndex = 0;
        if (childIndex%2 !== 0) {
            parentIndex = Math.floor(childIndex/2);
        } else {
            parentIndex = Math.floor((childIndex-1)/2);
        }
        return parentIndex;
    }

    delete (value) {
        for (let i=0; i<this.queue.length;i++) {
            if (this.queue[i] === value) {
                //replace this with the last node
                this.queue[i] = this.queue[this.queue.length-1];
                this.queue.pop(); //removing the last node
                //check if heap is valid
                let leftChild = 2*i+1;
                let rightChild = 2*i+2;
                if (leftChild >= this.queue.length) {
                    leftChild = null;
                }
                if (rightChild >= this.queue.length) {
                    rightChild = null;
                }
                //find out which child to compare with, if any
                let childToCompare = null;
                if (leftChild !== null && rightChild !== null) {
                    if (this.queue[leftChild] < this.queue[rightChild]) {
                        childToCompare = leftChild;
                    } else {
                        childToCompare = rightChild;
                    }
                } else if (leftChild === null && rightChild !== null) {
                    childToCompare = rightChild;
                } else if (leftChild !== null && rightChild === null) {
                    childToCompare = leftChild;
                } else {
                    //both are null means no child node
                    return true;
                }
                //compare with the child node
                if (this.queue[childToCompare] < this.queue[i]) {
                    //sink
                    this.sink(i, childToCompare);
                }
                return true;
            }
        }
        console.log("Node with give value not found");
    }

    sink (parentIndex, childIndex) {
        let temp = this.queue[parentIndex];
        this.queue[parentIndex] = this.queue[childIndex];
        this.queue[childIndex] = temp;

        parentIndex = childIndex;
         //check if heap is valid
         let leftChild = 2*parentIndex+1;
         let rightChild = 2*parentIndex+2;
         if (leftChild >= this.queue.length) {
             leftChild = null;
         }
         if (rightChild >= this.queue.length) {
             rightChild = null;
         }
         //find out which child to compare with, if any
         let childToCompare = null;
         if (leftChild !== null && rightChild !== null) {
             if (this.queue[leftChild] < this.queue[rightChild]) {
                 childToCompare = leftChild;
             } else {
                 childToCompare = rightChild;
             }
         } else if (leftChild === null && rightChild !== null) {
             childToCompare = rightChild;
         } else if (leftChild !== null && rightChild === null) {
             childToCompare = leftChild;
         } else {
             //both are null means no child node
             return true;
         }
         //compare with the child node
         if (this.queue[childToCompare] < this.queue[parentIndex]) {
             //sink
             this.sink (parentIndex, childToCompare);
         }
         return true;
    }

    dequeue () {
        this.delete(this.queue[0]); // just remove the root node
    }
}