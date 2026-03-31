package com.proyecto.ligerito.controller;

import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.service.MochilaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mochilas")
@CrossOrigin(origins = "http://localhost:5173") // Para que React pueda conectar
public class MochilaController {

    @Autowired
    private MochilaService mochilaService;

    @GetMapping
    public List<Mochila> getMochilas() {
        return mochilaService.listarTodas();
    }
}