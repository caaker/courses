#include <stdio.h>
#include <stdlib.h>

// this function must match the signature required by qsort below
// (int*) casts the generic pointer to an int pointer
//  * dereferences the pointer to an integer value
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
  int numbers[] = {1, 2, 3, 2, 1};

  // this is a common c idiom for calculating the length of an array
  int length = sizeof(numbers) / sizeof(numbers[0]);
  qsort(numbers, length, sizeof(int), compare);

  for (int i = 0; i < length; i++) {
      printf("\n numbers: %d ", numbers[i]);
  }

  return 0;
}


