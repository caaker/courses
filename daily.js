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
  }
  insertNode(val) {

    // base case
    if(!this.root) {
      return this.root = new Node(val);
    }

    // iterative cases
    let iterator = this.root;
    while(iterator) {
      console.log(val)
      if(val < iterator.val && !iterator.left) {
        iterator.left = val;
        return iterator;
      } else if(val >= iterator.val && !iterator.right) {
        iterator.right = val;
        return iterator
      } else if( val < iterator.val ) {
        iterator = iterator.left;
      } else if( val >= iterator.val ) {
        iterator = iterator.right;
      }
    }
  }

}

let bst = new BST();

bst.insertNode(5);
bst.insertNode(6);
bst.insertNode(4);
bst.insertNode(7);


/*
Notes:

make .mjs file and export default the class
update to use public static class
static Node = class {}
export default

*/




