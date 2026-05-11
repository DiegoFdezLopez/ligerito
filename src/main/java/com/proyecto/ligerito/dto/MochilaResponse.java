package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta con los datos de una mochila.
 * Se devuelve en las operaciones de consulta, creación y actualización.
 */
@Data
public class MochilaResponse {

    private Long id;
    private String nombre;
    private boolean esPublica;

    public MochilaResponse() {
    }

    /**
     * @param id        identificador único de la mochila
     * @param nombre    nombre de la mochila
     * @param esPublica {@code true} si la mochila es visible para otros usuarios
     */
    public MochilaResponse(Long id, String nombre, boolean esPublica) {
        this.id = id;
        this.nombre = nombre;
        this.esPublica = esPublica;
    }
}
