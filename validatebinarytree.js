// # Validate Binary Tree
// Create a function called `validate` that receives a Node as an argument (Initially the head of a tree). This function should validate if the left child of each node is greater than its parent and the right child is greater than its parent. return true if it is a valid tree, otherwise false.
// ```markdown
//      4
//    /   \
//   2     7
//  / \
// 1   3
// ```
// ```markdown
//      4
//    /   \
//   7     2
//  / \
// 3   1

// class Node{
//     constructor(value, leftNode = null, rightNode = null){
//       this.value = value;
//       this.leftNode = leftNode;
//       this.rightNode = rightNode;
//     }
//   }
  
//   const tree = new Node(4, new Node(7, new Node(3), new Node(1)), new Node(2))


//   class Node{
//     constructor(value, leftNode = null, rightNode = null){
//       this.value = value;
//       this.leftNode = leftNode;
//       this.rightNode = rightNode;
//     }
//   }
  
//   const treeGood = new Node(4, new Node(2, new Node(1), new Node(3)), new Node(7))
//   const treeBad = new Node(4, new Node(7, new Node(3), new Node(1)), new Node(2))

//   class Node {
//     constructor(value) {
//     this.data = value;
//     this.left = null;
//     this.righ = null;
//      }
//     }
    
    class Tree {
     constructor() {
     this.root = null;
    }
    
    isValidBST(node, min = null, max = null) {
    if (!node) return true;
    if (max !== null && node.value >= max) {
      return false;
    }
    if (min !== null && node.value <= min) {
      return false;
    }
    const leftSide = this.isValidBST(node.left, min, node.value);
    const rightSide = this.isValidBST(node.right, node.value, max);
    
    return leftSide && rightSide;
    }
    }