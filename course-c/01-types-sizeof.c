#include <stdio.h>

int main() {

  // note that lu refers to long, unsigned, and integer is implicit
  // however zu is the option for size_t, and appears not to be an acronym
  // int on this machine is 4 bytes / 32 bits
  int a = 3;
  printf("%zu is the size of int \n", sizeof(int));
  printf("%zu is the size of a \n", sizeof(a));
  printf("%zu is the size of &a \n", sizeof(&a));

  // a string can be declared using as array of characters
  char str1[] = "";
  char str2[] = "a";
  char str3[] = "ab";
  printf("--\n");
  printf("%zu is the size of '' \n", sizeof(str1));
  printf("%zu is the size of 'a' \n", sizeof(str2));
  printf("%zu is the size of 'ab' \n", sizeof(str3));

  // a string can be declared using a character pointer
  printf("--\n");
  char* str4 = "";
  char* str5 = "a";
  char* str6 = "ab";
  printf("%zu is the size of %s \n", sizeof(str4), str4);
  printf("%zu is the size of %s \n", sizeof(str5), str5);
  printf("%zu is the size of %s \n", sizeof(str6), str6);

  return 1;
}
