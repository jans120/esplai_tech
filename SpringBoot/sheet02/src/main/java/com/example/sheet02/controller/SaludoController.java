package com.example.sheet02.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saludo")
public class SaludoController {

    @GetMapping("/{hola}")
    public String getSaludo() {
        return "Servidor operativo. Bienvenido a la API";
    }

}
