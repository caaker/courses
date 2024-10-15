public class Classes {

  public static void main(String[] args) {

    // call a static method from a static method
    staticMethod();

    // instantiate a class and call an instance method
    ClassTeacher greeter = new ClassTeacher();
    greeter.instanceMethod();
  }

  // static method
  static void staticMethod() {
    System.out.println("I am a static method");
  }

}

class ClassTeacher {

    // methods are public and instance by default
    void instanceMethod() {
        System.out.println("I am a public instance method");
        privateMethod();
    }

    private void privateMethod() {
      System.out.println("I am a private instance method");
    }

}
