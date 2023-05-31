#include <stdio.h>

void printArray(int arr[], int length) {
  for(int i = 0; i < length; i++) {
    printf("%i\n", arr[i]);
  }
}

int main() {

  // initializer list added in C99
  int arr[3] = {0, 1, 2};
  int length = sizeof(arr) / sizeof(arr[0]);
  printf("Length is: %i \n", length);
  printArray(arr, length);
  return 0;

}