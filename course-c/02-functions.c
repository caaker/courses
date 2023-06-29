#include <stdio.h>

// return the argument
int loopInt(a) {
  return a;
}

// simple sum function
int sum(a, b) {
  return a + b;
}

// main is a function that returns 0 if there are no errors
int main() {
  int a = 1;
  a = loopInt(a);
  printf("loopInt: %i \n", a);

  int b = sum(2, 2);
  printf("sum: %i \n", b);
  return 0;
}
