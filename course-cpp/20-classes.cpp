#include <iostream>
using namespace std;

class Hello {
public:

    // constructor
    Hello() {
        cout << "I am a constructor" << endl;
    }

    // instance method
    void hi() {
        cout << "I am an instance method!" << endl;
    }

    static void hello() {
        cout << "I am a static method!\n";
    }
};

int main() {

    Hello::hello();

    // create an instance of the class
    Hello hello;

    // call the instance method hi
    hello.hi();
    return 0;
}
