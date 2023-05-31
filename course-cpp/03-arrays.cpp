#include <iostream>

using namespace std;

class ArrayPrinter {
public:
    void printArray(int arr[], int length) {
        for (int i = 0; i < length; i++) {
            cout << arr[i] << endl;
        }
    }
};

int main() {
    int arr[3] = {0, 1, 2};
    int length = sizeof(arr) / sizeof(arr[0]);
    cout << "Length is: " << length << endl;

    ArrayPrinter printer;
    printer.printArray(arr, length);

    return 0;
}
