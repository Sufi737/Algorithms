function TreeNode (value, left, right) {
    this.value = value===null ? null : value;
    this.left = left===null ? null : left;
    this.right = right===null ? null : right;
}


class BinarySearchTree {
    constructor (value, left, right) {
        this.root = new TreeNode(value, left, right)
        this.nodesCount = value===null ? 0 : 1;
    }

    add (value) {
        //if this is the first node
        if (this.root === null) {
            this.root = new TreeNode(value, null, null)
            this.nodesCount++;
            return true;
        }
        add (this.root, value)
    }

    add (parent, value) {
        //traverses the tree till leaf is met
        if (parent.left === null && value < parent.value) {
            parent.left = new TreeNode(value, null, null)
            return true;
        } else if (parent.right === null && parent.value < value) {
            parent.right = new TreeNode(value, null, null)
            return true;
        } else {
            if (parent.value < value) {
                parent = parent.right;
            } else {
                parent = parent.left;
            }
            add (parent, value)
        }
    }

    find (value) {
        let start = this.root
        while (start) {
            if (start.value === value) {
                return start;
            } else if (start.value < value) {
                start = start.right
            } else {
                start = start.left
            }
        }
        return false;
    }

    remove (value) {
        let nodeToDelete = this.find(value);
        if (!nodeToDelete) {
            console.log("Given node not found in the tree")
            return false
        } 
        if (nodeToDelete.left === null && nodeToDelete.right === null) {
            //leaf node 
            nodeToDelete.value = null
        } else if (nodeToDelete.left === null) {
            let leftSubtree = nodeToDelete.left
            //swap the value of the node to delete with its left child
            nodeToDelete.value = leftSubtree.value
        } else if (nodeToDelete.right === null) {
            let rightSubtree = nodeToDelete.right
            nodeToDelete.value = rightSubtree.value
        } else {
            //both subtrees present
            this.root = nodeToDelete.left;
            //adding the right subtree to the rightmost child of the left subtree
            let rightSubtree = nodeToDelete.right
            let rightParent = this.findRightLeaf()
            rightParent.right = rightSubtree
        }
    }

    findRightLeaf () {
        let start = this.root
        while (start) {
           if (start.right === null) {
               return start
           }
        }
        return null
    }
}