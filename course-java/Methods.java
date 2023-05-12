public class Methods {

  public static void main(String[] args) {

    int a = returnInt(1);
    System.out.println(a);

    Methods M = new Methods();
    M.returnDouble(1.0);

  }

  public static int returnInt(int a) {
    return a;
  }

  public double returnDouble(double a) {
    return a;
  }

}
