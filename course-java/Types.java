import java.util.HashMap;

// class name must match the file name or error is thrown
public class Types {

  public static void main(String[] args) {
    types();
    typesComposite();
  }

  // types require initialization
  public static void types() {
    int i = 1;
    System.out.println(i);
    float f = 1.0f;
    System.out.println(f);
    double d = 2.0;
    System.out.println(d);
    char c = 'c';
    System.out.println(c);
    boolean b = true;
    System.out.println(b);
    byte by = 1;
    System.out.println(by);
    short s = 1;
    System.out.println(s);
  }

  public static void typesComposite() {

    // array
    int[] myArray = {1, 2, 3};

    // hash
    HashMap<String, String> capitalCities = new HashMap<String, String>();
  }

}




