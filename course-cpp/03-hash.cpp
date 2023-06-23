#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
  unordered_map<string, string> hashTable;

  hashTable["tomato"] = "red";
  hashTable["kale"] = "green";

  cout << "Color of tomato: " << hashTable["tomato"] << endl;
  cout << "Color of kale: " << hashTable["kale"] << endl;

  return 0;
}
