public class main {
    public static void main(String args[]){
        fibonacci(35);
        System.out.println("Hello world");
    }

    public static int fibonacci(int num) {
        if (num <= 1) return num;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

}
