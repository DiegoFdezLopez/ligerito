package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO para mostrar un item dentro del detalle público de una mochila.
 */
@Data
public class ItemPublicoResponse {

    private Long id;
    private String nombre;
    private Integer peso;
    private Integer cantidad;
    private String categoriaNombre;
    private String descripcion;
    private String enlace;

    public ItemPublicoResponse() {
    }

    /**
     * @param id              identificador único del ítem en la mochila
     * @param nombre          nombre del ítem
     * @param peso            peso unitario en gramos
     * @param cantidad        unidades incluidas en la mochila
     * @param categoriaNombre nombre de la categoría a la que pertenece
     * @param descripcion     descripción del ítem; puede ser {@code null}
     * @param enlace          URL de referencia o compra; puede ser {@code null}
     */
    public ItemPublicoResponse(Long id, String nombre, Integer peso, Integer cantidad,
            String categoriaNombre, String descripcion, String enlace) {
        this.id = id;
        this.nombre = nombre;
        this.peso = peso;
        this.cantidad = cantidad;
        this.categoriaNombre = categoriaNombre;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
