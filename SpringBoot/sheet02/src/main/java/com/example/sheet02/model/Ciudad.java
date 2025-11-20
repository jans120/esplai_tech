package com.example.sheet02.model;

public class Ciudad {
    Long id;
    String nombre;
    int poblacion;

    public Ciudad() {
    }

    public Ciudad(long id, String nombre, int poblacion) {
        this.id = id;
        this.nombre = nombre;
        this.poblacion = poblacion;
    }

    public long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public int getPoblacion() {
        return poblacion;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPoblacion(int poblacion) {
        this.poblacion = poblacion;
    }

}
