#include <stdio.h>

int loopArg(a) {
  printf("One argument is %i \n", a);
  return a;
}

int main() {
  int a = loopArg(1);
  printf("It came back as %i \n", a);

  return 0;
}
