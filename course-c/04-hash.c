#include <stdio.h>

#define CAPACITY 5000


// simple hash function converts a string to the sum of its ascii values and takes the modulus( remainder )
unsigned long hash_function(char* str) {
  unsigned long i = 0;
  for (int j = 0; str[j] != '\0'; j++) {

    // str[j] holds the ascii value
    printf("str[j] = %i, ", str[j]);
    i = i + str[j];
  }
  return i % CAPACITY;
}

int main() {
  char input[] = "abcdefg";
  unsigned long hashValue = hash_function(input);
  printf("\nHash value: %lu\n", hashValue);
  return 0;
}