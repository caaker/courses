#include <iostream>

using namespace std;

// similar to C, but no include needed for boolean
void types() {
  bool b = true;
  char c = 'c';
  short s = 1;
  int i = 1;
  long l = 1;
  float f = 1.0;
  double d = 2.0;

  cout << "bool: " << b << endl;
  cout << "char: " << c << endl;
  cout << "short: " << s << endl;
  cout << "int: " << i << endl;
  cout << "long: " << l << endl;
  cout << "float: " << f << endl;
  cout << "double: " << d << endl;
}

void moreTypes() {
  // classes
  // templates
  // exceptions
  // STL containers
  // smart pointers
}

int main() {
  types();
  moreTypes();
}
