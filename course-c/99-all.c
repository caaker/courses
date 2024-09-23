#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

void control() {

  // for loopls
  for (int i = 1; i <= 5; i += 2) {
    int j = i;
    printf("%d \n", j);
  }

  // while loop
  int k = 0;
  while( k < 3 ) {
    printf("%d \n", k);
    k++;
  }

  // if / else
  int foo = 1;
  if(foo){
    printf("true, ");
  } else {
    printf("false");
  }
}

// arrays
void arrays() {
  int vec0[3] = { 0, 1, 2 };
  void* vec1 = malloc(sizeof(int) * 5);
}

// strings
void strings() {
  int length = 5;
  char word1[] = "one, ";
  char* word2 = "two, ";
  char* word3 = malloc(sizeof(char) * (length + 1)); // greater flexibility than string literal
  strcpy(word3, "three");

  printf("%s", word1);
  printf("%s", word2);
  printf("%s", word3);
}

// math
void math() {
  int test = abs(-5);
  int test1 = sqrt(9);
}

// program starts here
int main() {
  control();
  strings();
  arrays();
  math();
  return 0;
}
