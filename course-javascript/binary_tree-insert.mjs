// update to use public static class and update jshint
// embedded as follows: static Node = class {}
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
    this.makeRandomTree();
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
    this.insertNode(5);
    this.insertNode(6);
    this.insertNode(4);
    this.insertNode(7);
  }

  makeRandomTree() {
    for(let i = 0; i < 10; i++) {
      let int = Math.floor(Math.random() * 10);
      // console.log(int)
      this.insertNode(int);
    }
  }

}

export default BST