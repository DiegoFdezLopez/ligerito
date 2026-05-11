package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta con los datos de un item de armario.
 * Se devuelve en las operaciones de consulta, creación y actualización.
 */
@Data
public class ItemArmarioResponse {

    private Long id;
    private String nombre;
    private Integer peso;
    private String descripcion;
    private String enlace;

    public ItemArmarioResponse() {
    }

    /**
     * @param id          identificador único del item
     * @param nombre      nombre del item
     * @param peso        peso en gramos
     * @param descripcion descripción del item; puede ser {@code null}
     * @param enlace      URL de referencia o compra; puede ser {@code null}
     */
    public ItemArmarioResponse(Long id, String nombre, Integer peso, String descripcion, String enlace) {
        this.id = id;
        this.nombre = nombre;
        this.peso = peso;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
