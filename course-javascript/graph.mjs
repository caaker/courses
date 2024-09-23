// a graph implemented as an adjacency list which is implemented as a hash map with arrays
class Graph {

  // top structure is a map
  constructor() {
    this.adjacency_list = new Map();
  }

  addVertex(vertex) {
    this.adjacency_list.set(vertex, []);
  }

  // secondary structure is an array
  addEdge(src, dst) {
    this.adjacency_list.get(src).push(dst);
    this.adjacency_list.get(dst).push(src)
  }

  printGraph() {
    const keys = this.adjacency_list.keys();
  
	// loop through keys of the hash map
    for (let i of keys) {
      const values = this.adjacency_list.get(i);
      let string = '';
      
	  // loop through each array in the hash map
	  for (let j of values) {
        string += j + ' ';
      }
      console.log(i + ' -> ' + string);
    }
  }

  makeGraph() {
	  
	// add vertices
    const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
    for (let i = 0; i < vertices.length; i++) {
      this.addVertex(vertices[i]);
    }
	
	// add edges
    this.addEdge('A', 'B');
    this.addEdge('A', 'D');
    this.addEdge('A', 'E');
    this.addEdge('B', 'C');
    this.addEdge('D', 'E');
    this.addEdge('E', 'F');
    this.addEdge('E', 'C');
    this.addEdge('C', 'F');
  }

}

const graph = new Graph();
graph.makeGraph();
graph.printGraph();

