package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CategoriaCreateRequest {
    
    @NotBlank(message = "El nombre no puede estar vacío")
    private String nombre;

    @NotNull(message="La mochila es obligatoria")
    private Long mochilaId;

    public CategoriaCreateRequest() {
    }

    public CategoriaCreateRequest(@NotBlank(message = "El nombre no puede estar vacío") String nombre,
            @NotNull(message = "La mochila es obligatoria") Long mochilaId) {
        this.nombre = nombre;
        this.mochilaId = mochilaId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getMochilaId() {
        return mochilaId;
    }

    public void setMochilaId(Long mochilaId) {
        this.mochilaId = mochilaId;
    }

    
    
}
