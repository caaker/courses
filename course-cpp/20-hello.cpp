#include <iostream>

class Hello {
public:

    // constructor
    Hello() {
        std::cout << "I am a constructor" << std::endl;
    }

    // instance method
    void hi() {
        std::cout << "I am an instance method!" << std::endl;
    }

    static void hello() {
        std::cout << "I am a static method!\n";
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
