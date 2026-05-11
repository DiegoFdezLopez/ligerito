package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO para la actualización parcial de una mochila.
 * Todos los campos son opcionales; solo se aplicarán los que no sean {@code null}.
 * El nombre además se ignora si está en blanco.
 */
@Data
public class MochilaPatchRequest {

    private String nombre;
    private Boolean esPublica;

    public MochilaPatchRequest() {
    }

    /**
     * @param nombre    nuevo nombre de la mochila; {@code null} o en blanco para no modificarlo
     * @param esPublica nueva visibilidad de la mochila; {@code null} para no modificarla
     */
    public MochilaPatchRequest(String nombre, Boolean esPublica) {
        this.nombre = nombre;
        this.esPublica = esPublica;
    }
}
