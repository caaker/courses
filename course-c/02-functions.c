#include <stdio.h>

int loopInt(a) {
  printf("One argument is %i \n", a);
  return a;
}

int sum(a, b) {
  return a + b;
}

int main() {
  int a = loopInt(1);
  printf("It came back as %i \n", a);

  int b = sum(2, 2);
  printf("Sum is: %i \n", b);
  return 0;
}
