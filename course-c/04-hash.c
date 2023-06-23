#include <stdio.h>

#define CAPACITY 5000

unsigned long hash_function(char* str) {
  unsigned long i = 0;
  for (int j = 0; str[j] != '\0'; j++) {
    i = i + str[j];
  }
  return i % CAPACITY;
}

int main() {
  char input[] = "abcdefg";
  unsigned long hashValue = hash_function(input);
  printf("Hash value: %lu\n", hashValue);
  return 0;
}