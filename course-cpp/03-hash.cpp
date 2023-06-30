#include <iostream>
#include <unordered_map>
using namespace std;

int main() {

  unordered_map<string, string> hashmap;
  hashmap["tomato"] = "red";
  hashmap["kale"] = "green";
  cout << "Color of tomato: " << hashmap["tomato"] << endl;
  cout << "Color of kale: " << hashmap["kale"] << endl;

  cout << hashmap.count("tomato") << endl;
  return 0;
}
