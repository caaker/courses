// stdio provides printf, scanf ...
#include <stdio.h>

int main() {

  char username[20] = "World";

  // input removed for use in sublime with no terminal access
  // printf("please enter your name\n");
  // scanf("%19s", username);

  printf("Hello %s\n", username);

  return 0;
}
