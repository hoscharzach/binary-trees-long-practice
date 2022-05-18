const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  let queue = [rootNode]
  let arr = []
  while (queue.length) {
    let currentNode = queue.shift()
    arr.push(currentNode.val)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

  }
  return Math.min(...arr)
}

function findMaxBST(rootNode) {
  let queue = [rootNode]
  let arr = []
  while (queue.length) {
    let currentNode = queue.shift()
    arr.push(currentNode.val)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

  }
  return Math.max(...arr)
}

function findMinBT(rootNode) {
  let queue = [rootNode]
  let arr = []
  while (queue.length) {
    let currentNode = queue.shift()
    arr.push(currentNode.val)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

  }
  return Math.min(...arr)
}

function findMaxBT(rootNode) {
  let queue = [rootNode]
  let arr = []
  while (queue.length) {
    let currentNode = queue.shift()
    arr.push(currentNode.val)
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

  }
  return Math.max(...arr)
}

function getHeight(rootNode) {

  // if (rootNode === null) return 0
  // if(!rootNode.left && !rootNode.right) return 0
  // return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))

  rootNode.level = 0
  let arr = [rootNode]
  let count = 0
  while (arr.length) {
    let currentNode = arr.shift()
    if (currentNode.left) {
      currentNode.left.level = currentNode.level + 1
      arr.push(currentNode.left)
    } if (currentNode.right) {
      currentNode.right.level = currentNode.level + 1
      arr.push(currentNode.right)
    }
    if (currentNode.level > count) {
      count = currentNode.level
    }

  }
  return count
}

function countNodes(rootNode) {
  // Your code here

  let count = 0;

  if (rootNode) {
    count++
    count = count + countNodes(rootNode.left)
    count = count + countNodes(rootNode.right)
  }

  return count
}


function balancedTree(rootNode) {
  // Your code here
  if (rootNode === null) return true

  return getHeight2(rootNode) !== -1


  function getHeight2(node) {
    if (node === null) return 0

    let left = getHeight2(node.left)
    let right = getHeight2(node.right)


    if (left === -1 || right === -1 || Math.abs(left - right) > 1) { return -1 }

    return Math.max(left, right) + 1
  }
}




function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
