#include <stdio.h>

void integers() {
  int i = 1;
  int32_t i32 = 1;
  int64_t i64 = 1;
  printf("Size of int   is: %zu \n", sizeof(i));
  printf("Size of int32 is: %zu \n", sizeof(i32));
  printf("Size of int64 is: %zu \n", sizeof(i64));
}

int main() {
  integers();
  return 1;
}
