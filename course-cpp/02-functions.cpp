#include <iostream>
using namespace std;

// unlike C we must express the argument type
int argLoop(int a) {
  return a;
}

int main() {
  int a = argLoop(1);
  cout << "a: " << a << endl;
  return 0;
}