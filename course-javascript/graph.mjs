// represent the graph as an adjacency list
class Graph {
  constructor(vertices) {

    // each key is a vertex, and each value is an array of connected vertices
    this.adjacency_list = new Map();

    // this can be updated manually as the vertices are added
    this.vertices = vertices;
  }

  addNode(vertex) {
    this.adjacency_list.set(vertex, []);
  }

}

const G1 = new Graph(10);