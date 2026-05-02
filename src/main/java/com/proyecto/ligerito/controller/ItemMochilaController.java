package com.proyecto.ligerito.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.proyecto.ligerito.dto.ItemMochilaCreateRequest;
import com.proyecto.ligerito.dto.ItemMochilaResponse;
import com.proyecto.ligerito.service.ItemMochilaService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/items-mochila")
@CrossOrigin(origins = { "http://localhost:5173", "http://127.0.0.1:5173" })
@Tag(name = "ItemMochila", description = "Items de una mochila")
public class ItemMochilaController {

    private final ItemMochilaService itemMochilaService;

    public ItemMochilaController(ItemMochilaService itemMochilaService) {
        this.itemMochilaService = itemMochilaService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ItemMochilaResponse crearItemMochila(@Valid @RequestBody ItemMochilaCreateRequest request) {
        return itemMochilaService.crearItemMochila(request);
    }

}
