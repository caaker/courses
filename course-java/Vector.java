import java.util.ArrayList;

public class Vector {
  public static void main(String[] args) {
    ArrayList<String> AL1 = new ArrayList<>();
    AL1.add("Hello");
    for (String greeting : AL1) {
      System.out.print(greeting);
    }
    System.out.println();
  }
}
