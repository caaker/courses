import java.util.HashMap;

public class Hash {
  public static void main(String[] args) {
    HashMap<String, String> hash = new HashMap<>();
    hash.put("tomato", "red");
    System.out.println("Color of tomato: " + hash.get("tomato"));
  }
}
