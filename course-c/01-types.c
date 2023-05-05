#include <stdio.h>

// constant
// we can not change the value
void constant() {
  const int c1 = 0;
  // c1 = 0;
  printf("%i\n", c1);
}

// constant pointer
// we can not change the address pointed to
void constantPointer() {
  int x = 1;
  int y = 2;
  int* const p_int1 = &x;
  *p_int1 = y;
  // p_int1 = &y;
  printf("%i\n", *p_int1);
}

// constant pointer value
// we can not change the value via the pointer
void constantPointerValue() {
  int x = 3;
  int y = 4;
  const int *p_int = &x;
  int *p1_int = &x;
  p_int = &y;
  y = 5;
  // *p_int = 3;
  *p1_int = 6;
  printf("%i\n", *p1_int);
}

int main() {
  constant();
  constantPointer();
  constantPointerValue();
  return 0;
}
