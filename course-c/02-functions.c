#include <stdio.h>

int loopInt(a) {
  printf("One argument is %i \n", a);
  return a;
}

int main() {
  int a = loopInt(1);
  printf("It came back as %i \n", a);
  return 0;
}
