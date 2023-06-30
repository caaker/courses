import java.util.HashMap;

public class Hash {
  public static void main(String[] args) {
    HashMap<String, String> hashmap = new HashMap<>();
    hashmap.put("sky", "blue");
    hashmap.put("grass", "green");
    System.out.println(hashmap);
    hashmap.remove("sky");
    System.out.println(hashmap);
    hashmap.clear();
    System.out.println(hashmap);
  }
}
