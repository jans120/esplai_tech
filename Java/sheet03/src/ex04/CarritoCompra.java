package ex04;

import java.util.ArrayList;
import java.util.List;

public class CarritoCompra {
    private List<LineaCarrito> lineas = new ArrayList<>();

    private class LineaCarrito {
        private Producto producto;
        private int unidades;

        public LineaCarrito(Producto producto, int unidades) {
            this.producto = producto;
            this.unidades = unidades;
        }

        public double subTotal() {
            return this.unidades * this.unidades;
        }

    }

    public void agregarProducto(Producto p, int unidades) {
        if (p != null && unidades > 0 && p.precio > 0) {
            for (LineaCarrito linea : lineas) {
                if (linea.producto.nombre.equals(p.nombre)) {
                    linea.unidades += unidades;
                    System.out.printf("Se sumaron %d unidades al producto '%s' existente.\n", unidades, p.nombre);
                    return;
                }
            }
            lineas.add(new LineaCarrito(p, unidades));
            System.out.printf("Se anyadio %d unidades del producto '%s'.\n", unidades, p.nombre);
        }
    }

    public void eliminarProducto(String nombre) {
        for (LineaCarrito linea : lineas) {
            if (linea.producto.nombre.equals(nombre)) {
                System.out.printf("Se ha borrado el producto %s.\n", nombre);
                return;
            }
        }
        System.out.printf("El producto %s no se encuentra en el carrito'.\n", nombre);
    }

    public void total() {
        double sumas = 0.0;

        for (LineaCarrito linea : lineas) {
            sumas += linea.subTotal();
        }
        System.out.printf("El precio total es de %.2f.\n", sumas);
    }

    public void mostrarResumen() {
        double sumas = 0.0;
        for (LineaCarrito linea : lineas) {
            sumas += linea.subTotal();
            System.out.printf("%s - %d x %.2f = %.2f.\n", linea.producto.nombre, linea.unidades, linea.producto.precio,
                    linea.subTotal());
        }
        System.out.printf("El TOTAL de la lista es de %.2f.\n", sumas);
    }

}
