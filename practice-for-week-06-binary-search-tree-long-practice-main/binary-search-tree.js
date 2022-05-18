// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor(root = null) {
      this.root = root
    }

    insert(val, currentNode=this.root) {
      let newNode = new TreeNode(val)

      if (currentNode === null) {
        this.root = newNode
        return
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode
        } else this.insert(val, currentNode.left)

      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
        } else this.insert(val, currentNode.right)
      }
    }

    search(val) {
      let currentNode = this.root
    while (currentNode !== null) {
      if (currentNode.val === val) return true

      else if (val < currentNode.val) {
        currentNode = currentNode.left
      }
      else if (val > currentNode.val) {
        currentNode = currentNode.right
      }
    }

      return false
    }


    preOrderTraversal(currentNode = this.root) {

      if (currentNode === null) return
      else {
        console.log(currentNode.val)
       this.preOrderTraversal(currentNode.left)
       this.preOrderTraversal(currentNode.right)
      }
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode === null) return
      else {
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
      }
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode === null) return
      else {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
      }
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
      let queue = [this.root]

      while(queue.length) {
        let currentNode = queue.shift()
        console.log(currentNode.val)
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }

      }


    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here
      let stack = [this.root]

      while(stack.length) {
        let currentNode = stack.pop()
        console.log(currentNode.val)
        if (currentNode.left) {
          stack.push(currentNode.left)
        }
        if (currentNode.right) {
          stack.push(currentNode.right)
        }

      }
    }
  }
  module.exports = { BinarySearchTree, TreeNode };
// Your code here
