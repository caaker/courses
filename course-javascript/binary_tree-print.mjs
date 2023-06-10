import BST from './binary_tree-insert.mjs';

class BSTMethods extends BST {

  dfs(node) {
    function recurse(node) {
      if(node === null) {
        return node;
      }

      // pre order
      recurse(node.left);

      // in order
      console.log(node.val)
      recurse(node.right);

      // post order

    }
    recurse(node);
  }

  print() {
    this.dfs(this.root)
  }

}

const methods = new BSTMethods();
methods.print();
