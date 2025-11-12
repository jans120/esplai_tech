package ex01;

public class Producto {

    public String nombre;
    public double precio;
    public int stock;

    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public void mostrarDatos() {
        System.out.printf("Datos-> nombre %s, precio %f, stock %d \n", this.nombre, this.precio, this.stock);
    }

}
