#include <iostream>
using namespace std;

class Hello {
 public:

    // constructor
    Hello() {
        cout << "I am a constructor!" << endl;
    }

    // instance method
    void hi() {
        cout << "I am an instance method!" << endl;
    }

    // static method
    static void hello() {
        cout << "I am a static method!\n";
        privateMethod();
    }

 private:

    // private static method
    static void privateMethod() {
        cout << "I am a private static method!\n";
    }
};

int main() {
    // public method
    Hello::hello();

    // private method - attempting to call will throw an error
    // Hello::privateMethod();


    // create an instance of the class
    Hello hello;

    // call the instance method hi
    hello.hi();

    return 0;
}
