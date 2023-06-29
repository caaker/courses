import java.util.HashMap;

public class Types {

  public static void main(String[] args) {
    types();
    typesComposite();
  }

  // 8 primary types require initialization, similar to C but adds byte
  public static void types() {
    boolean b = true;
    char c = 'c';
    short s = 1;
    byte by = 1;
    int i = 1;
    long l = 1;
    float f = 1.0f;
    double d = 2.0;

    System.out.println(b);
    System.out.println(c);
    System.out.println(s);
    System.out.println(by);
    System.out.println(i);
    System.out.println(l);
    System.out.println(f);
    System.out.println(d);
  }

  public static void typesComposite() {

    // string
    String word = "word";
    System.out.println(word);

    // array
    int[] arr1 = {1, 2, 3};
    System.out.println(arr1);

    // hash
    HashMap<String, String> hm1 = new HashMap<String, String>();
    hm1.put("A", "AA");
    hm1.put("B", "BB");
    System.out.println(hm1);
  }

}




