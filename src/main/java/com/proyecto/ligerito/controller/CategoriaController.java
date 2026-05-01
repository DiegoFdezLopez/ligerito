package com.proyecto.ligerito.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.ligerito.dto.CategoriaCreateRequest;
import com.proyecto.ligerito.dto.CategoriaResponse;
import com.proyecto.ligerito.service.CategoriaService;
import org.springframework.web.bind.annotation.RequestBody;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@Tag(name = "Categoria", description = "Categorias para organizar los item de la mochila")
@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = { "http://localhost:5173", "http://127.0.0.1:5173" })
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public List<CategoriaResponse> listarPorMochila(@RequestParam Long mochilaId) {
        return categoriaService.listarPorMochila(mochilaId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoriaResponse crearCategoria(@Valid @RequestBody CategoriaCreateRequest request) {
        return categoriaService.crearCategoria(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminarPorId(id);
    }

}
