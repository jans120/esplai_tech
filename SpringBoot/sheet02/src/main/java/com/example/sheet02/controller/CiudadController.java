package com.example.sheet02.controller;

import com.example.sheet02.model.Ciudad;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadController {

    @GetMapping("/{id}")
    public Ciudad getCiudadesId(@PathVariable Long id) {

        String nombreCiudad = "Ciudad Inventada " + id;
        int poblacionInventada = 1000000 + id.intValue() * 100;

        return new Ciudad(id, nombreCiudad, poblacionInventada);
    }

    // @GetMapping("/{nombre}")
    // public Ciudad getCiudadesNombre(@RequestParam String nombre) {

    // // return new Ciudad(id, nombreCiudad, poblacionInventada);
    // }
}
