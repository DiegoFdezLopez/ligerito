package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DTO con los datos necesarios para crear una nueva categoría dentro de una mochila.
 * Ambos campos son obligatorios.
 */
@Data
public class CategoriaCreateRequest {

    @NotBlank(message = "El nombre no puede estar vacío")
    private String nombre;

    @NotNull(message = "La mochila es obligatoria")
    private Long mochilaId;

    public CategoriaCreateRequest() {
    }

    /**
     * @param nombre    nombre de la categoría; no puede estar vacío
     * @param mochilaId identificador de la mochila a la que pertenece la categoría
     */
    public CategoriaCreateRequest(String nombre, Long mochilaId) {
        this.nombre = nombre;
        this.mochilaId = mochilaId;
    }
}
