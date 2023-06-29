#include <stdio.h>
#include <stdbool.h>


// 7 primary types
void types() {
  bool b = true;
  char c = 'c';
  short s = 1;
  int i = 1;
  long l = 1;
  float f = 1.0;
  double d = 2.0;
  printf("Size of bool: %zu bytes\n", sizeof(bool));
  printf("Size of char: %zu bytes\n", sizeof(char));
  printf("Size of short: %zu bytes\n", sizeof(short));
  printf("Size of int: %zu bytes\n", sizeof(int));
  printf("Size of long: %zu bytes\n", sizeof(long));
  printf("Size of float: %zu bytes\n", sizeof(float));
  printf("Size of double: %zu bytes\n", sizeof(double));
}

// strings are declared in 2 primary ways
void strings() {

  // a string can be declared using an array of characters, double not single quotes required
  // note that null takes up a byte
  char str1[] = "";
  char str2[] = "a";
  char str3[] = "ab";
  printf("--\n");
  printf("%zu is the size of '' \n", sizeof(str1));
  printf("%zu is the size of 'a' \n", sizeof(str2));
  printf("%zu is the size of 'ab' \n", sizeof(str3));

  // a string can be declared using a character pointer
  // a pointer on my machine is 8 bytes
  printf("--\n");
  char* str4 = "";
  char* str5 = "a";
  char* str6 = "ab";
  printf("%zu is the size of %s \n", sizeof(str4), str4);
  printf("%zu is the size of %s \n", sizeof(str5), str5);
  printf("%zu is the size of %s \n", sizeof(str6), str6);
}

void ints() {
  // zu is the option for size_t, and appears not to be an acronym
  // int on my machine is 4 bytes
  int a = 3;
  printf("%zu is the size of int \n", sizeof(int));
  printf("%zu is the size of a \n", sizeof(a));
  printf("%zu is the size of &a \n", sizeof(&a));

  // in case you don't know the machine's implementation define explicitly
  int32_t i32 = 1;
  int64_t i64 = 1;
  printf("Size of int32 is: %zu \n", sizeof(i32));
  printf("Size of int64 is: %zu \n", sizeof(i64));
}

int main() {
  types();
  // strings();
  // ints();
  return 1;
}
