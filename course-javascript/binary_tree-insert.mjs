// update later to use an emedded public static class
// as follows: static Node = class {}
// as another example of encapsulation

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.addRandomNodes();
    this.makeTree();
  }
  insertNode(val) {

    // base case
    if(!this.root) {
      return this.root = new Node(val);
    }

    // iterative cases
    let iterator = this.root;
    while(iterator) {
      if(val < iterator.val && !iterator.left) {
        iterator.left = new Node(val);
        return iterator;
      } else if(val >= iterator.val && !iterator.right) {
        iterator.right = new Node(val);
        return iterator
      } else if( val < iterator.val ) {
        iterator = iterator.left;
      } else if( val >= iterator.val ) {
        iterator = iterator.right;
      }
    }
  }

  makeTree() {
    this.insertNode(10);
    this.insertNode(5);
    this.insertNode(15);
    this.insertNode(2);
    this.insertNode(7);
  }

  addRandomNodes() {
    for(let i = 0; i < 5; i++) {
      let int = Math.floor(Math.random() * 10);
      this.insertNode(int);
    }
  }

}

export default BST