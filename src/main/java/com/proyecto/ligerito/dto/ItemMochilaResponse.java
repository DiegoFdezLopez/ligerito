package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta que representa un ítem dentro de una mochila.
 * Combina los datos de identidad del ítem con su información visual y funcional,
 * incluyendo la categoría a la que pertenece y la cantidad registrada en la mochila.
 */
@Data
public class ItemMochilaResponse {

    private Long id;
    private Long itemArmarioId;
    private Long mochilaId;
    private Long categoriaId;
    private Integer cantidad;
    private String categoriaNombre;
    private String nombre;
    private Integer peso;
    private String descripcion;
    private String enlace;

    public ItemMochilaResponse() {
    }

    /**
     * @param id             identificador único del ítem en la mochila
     * @param itemArmarioId  identificador del ítem base en el armario
     * @param mochilaId      identificador de la mochila a la que pertenece
     * @param categoriaId    identificador de la categoría asignada
     * @param cantidad       unidades de este ítem incluidas en la mochila
     * @param categoriaNombre nombre de la categoría asignada
     * @param nombre         nombre del ítem
     * @param peso           peso unitario en gramos
     * @param descripcion    descripción del ítem; puede ser {@code null}
     * @param enlace         URL de referencia o compra; puede ser {@code null}
     */
    public ItemMochilaResponse(Long id, Long itemArmarioId, Long mochilaId, Long categoriaId,
            Integer cantidad, String categoriaNombre, String nombre, Integer peso,
            String descripcion, String enlace) {
        this.id = id;
        this.itemArmarioId = itemArmarioId;
        this.mochilaId = mochilaId;
        this.categoriaId = categoriaId;
        this.cantidad = cantidad;
        this.categoriaNombre = categoriaNombre;
        this.nombre = nombre;
        this.peso = peso;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
