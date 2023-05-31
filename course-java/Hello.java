public class Hello {

  public static void main(String[] args) {

    System.out.println("Hello World");

    // call a static method from a static method
    test();

    // instantiate a class and call an instance method
    Greeter greeter = new Greeter();
    greeter.sayHello();
  }

  // methods are instance methods by default, we must use the static keyword
  static void test() {
    System.out.println("This is a test");
  }

}

class Greeter {

    // methods are public by default
    void sayHello() {
        System.out.println("Hello, World!");
    }
}
