package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta con los datos de una categoría.
 */
@Data
public class CategoriaResponse {

    private Long id;
    private String nombre;

    public CategoriaResponse() {
    }

    /**
     * @param id     identificador único de la categoría
     * @param nombre nombre de la categoría
     */
    public CategoriaResponse(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
