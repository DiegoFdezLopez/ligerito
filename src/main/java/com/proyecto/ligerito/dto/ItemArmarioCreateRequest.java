package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DTO con los datos necesarios para crear un nuevo item de armario.
 * Los campos {@code nombre}, {@code peso} y {@code usuarioId} son obligatorios;
 * {@code descripcion} y {@code enlace} son opcionales.
 */
@Data
public class ItemArmarioCreateRequest {

    @NotBlank(message = "El nombre no puede estar vacío")
    private String nombre;

    @NotNull(message = "El peso es obligatorio")
    @Min(value = 0, message = "El peso no puede ser negativo")
    private Integer peso;

    private String descripcion;
    private String enlace;

    @NotNull(message = "El usuarioId es obligatorio")
    private Long usuarioId;

    public ItemArmarioCreateRequest() {
    }

    /**
     * @param nombre      nombre del item; no puede estar vacío
     * @param peso        peso en gramos; no puede ser negativo
     * @param descripcion descripción opcional del item
     * @param enlace      URL opcional de referencia o compra
     * @param usuarioId   ID del usuario propietario del armario
     */
    public ItemArmarioCreateRequest(String nombre, Integer peso, String descripcion, String enlace, Long usuarioId) {
        this.nombre = nombre;
        this.peso = peso;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.usuarioId = usuarioId;
    }
}
