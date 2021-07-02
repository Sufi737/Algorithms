class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = left

class BinarySearchTree:
    def __init__(self, value):
        if (value is not None):
            self.root = Node(value)
            self.nodesCount = 1
            return
        self.nodesCount=0

    def isEmpty(self):
        return self.nodesCount == 0
        
    def add(self, value):
        #if this is the first node
        if (self.isEmpty()):
            self.root = Node(value)
        self.addPrivate(self.root, value)
        self.nodesCount+=1

    def addPrivate(self, parent, value):
        #traverses the tree till leaf is met
        if (parent.left is None) and (value < parent.value):
            parent.left = Node(value)
            return True
        elif (parent.right is None) and (value > parent.value):
            parent.right = Node(value)
            return True
        else:
            if (parent.value < value):
                parent = parent.right
            else:
                parent = parent.left
            self.addPrivate(parent, value)

    def preOrderTraversal(self, root):
        if (root is None):
            return
        print(root.value)
        self.preOrderTraversal(root.left)
        self.preOrderTraversal(root.right)
    
    def inOrderTraversal(self, root):
        if (root is None):
            return
        self.inOrderTraversal(root.left)
        print(root.value)
        self.inOrderTraversal(root.right)

    def postOrderTraversal(self, root):
        if (root is None):
            return
        self.postOrderTraversal(root.left)
        self.postOrderTraversal(root.right)
        print(root.value)

    def find(self, value):
        head = self.root
        while(head is not None):
            if (head.value == value):
                return head
            if (head.value < value):
                head = head.right
            else:
                head = head.left
        return False

    def remove(self, root, value):
        if not root:
            return root
        
        elif root.value > value:
            root.left = self.remove(root.left, value)
            
        elif root.value < value:
            root.right = self.remove(root.right, value)
            
        else:
            if not root.left and not root.right:
                root = None
            
            elif not root.left:
                root = root.right
                
            elif not root.right:
                root = root.left
                
            else:
                minOfRight = self.findRightLeaf(root.right)
                root.value = minOfRight.value
                root.right = self.remove(root.right, minOfRight.value)
                
        return root


    def findRightLeaf(self, node):
        while(node is not None):
            if node.right is None:
                return node
            node = node.right
        return

bst = BinarySearchTree(5)
bst.add(7)
bst.add(3)
bst.add(2)
bst.add(9)
bst.add(4)
bst.add(6)
bst.add(1)
bst.remove(bst.root, 3)
bst.inOrderTraversal(bst.root)
