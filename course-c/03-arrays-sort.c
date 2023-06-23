#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int main() {
  int numbers[] = {1, 2, 3, 2, 1};
  int length = sizeof(numbers) / sizeof(numbers[0]);
  qsort(numbers, length, sizeof(int), compare);

  for (int i = 0; i < length; i++) {
      printf("\n numbers: %d ", numbers[i]);
  }

  return 0;
}


