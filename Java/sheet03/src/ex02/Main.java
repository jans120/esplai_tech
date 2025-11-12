package ex02;

public class Main {
    public static void main(String[] args) throws Exception {

        Producto prod1 = new Producto("prod1", 1.3, 3);
        Producto prod2 = new Producto("prod2", 3.3);

        prod1.mostrarDatos();
        prod2.mostrarDatos();
    }
}
