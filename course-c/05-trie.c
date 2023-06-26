#include <stdbool.h>
#include <stdio.h>

#define ALPHABET_SIZE 26

struct Node {
  // declare an array of pointers to Nodes
  struct Node* children[ALPHABET_SIZE];
  bool isEndOfWord;
};

int main() {
  printf("Just building a trie sir");

  struct Node *node1 = NULL;

  // allocate the appropriate amount of memory and casts the generic pointer to a Node pointer
  node1 = (struct Node *)malloc(sizeof(struct Node));
}