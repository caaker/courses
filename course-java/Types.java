import java.util.HashMap;

// class name must match the file name or error is thrown
public class Types {

  public static void main(String[] args) {
    types();
    typesComposite();
  }

  public static void types() {
    int i = 1;
    float F = 1.0f;
    double d = 2.0;
    char c = 'c';
    boolean b = true;
    byte by = 1;
    short s = 1;
  }

  public static void typesComposite() {

    // array
    int[] myArray = {1, 2, 3};

    // hash
    HashMap<String, String> capitalCities = new HashMap<String, String>();
  }

}




