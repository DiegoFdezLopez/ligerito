package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DTO con los datos necesarios para crear una nueva mochila.
 * Los tres campos son obligatorios: nombre, visibilidad e ID del usuario propietario.
 */
@Data
public class MochilaCreateRequest {

    @NotBlank(message = "El nombre de la mochila no puede estar vacío")
    private String nombre;

    @NotNull(message = "esPublica es obligatorio")
    private Boolean esPublica;

    @NotNull(message = "usuarioId es obligatorio")
    private Long usuarioId;

    public MochilaCreateRequest() {
    }

    /**
     * @param nombre    nombre de la mochila; no puede estar vacío
     * @param esPublica {@code true} si la mochila es visible para otros usuarios
     * @param usuarioId ID del usuario propietario de la mochila
     */
    public MochilaCreateRequest(String nombre, Boolean esPublica, Long usuarioId) {
        this.nombre = nombre;
        this.esPublica = esPublica;
        this.usuarioId = usuarioId;
    }
}
