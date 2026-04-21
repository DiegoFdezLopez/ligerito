package com.proyecto.ligerito.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.ligerito.dto.ItemArmarioResponse;
import com.proyecto.ligerito.service.ItemArmarioService;

@RestController
@RequestMapping("/api/armario")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
public class ItemArmarioController {

    private final ItemArmarioService itemArmarioService;

    public ItemArmarioController(ItemArmarioService itemArmarioService) {
        this.itemArmarioService = itemArmarioService;
    }

    @GetMapping
    public List<ItemArmarioResponse> listarArmario() {
        return itemArmarioService.listarTodos();
    }
}