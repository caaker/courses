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

  bfs(node) {
    const queue = [];
    if(node) {
      console.log(node.val)
      console.log('--')
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
    }
    let iter = queue.pop();
    while(iter) {
      console.log(iter.val)
      iter.left && queue.unshift(iter.left);
      iter.right && queue.unshift(iter.right);
      iter = queue.pop();
    }
  }

  print() {
    // this.dfs(this.root);
    this.bfs(this.root);
  }

}

const methods = new BSTMethods();
methods.print();
