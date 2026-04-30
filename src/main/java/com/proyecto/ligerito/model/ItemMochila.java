package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entidad que representa un item incluido en una mochila.
 * Actúa como tabla de unión entre {@link Mochila}, {@link Categoria} e {@link ItemArmario},
 * añadiendo la cantidad de unidades y una descripción específica para ese uso concreto.
 */
@Entity
@Data
@Table(name = "items_mochila")
@AllArgsConstructor
@NoArgsConstructor
public class ItemMochila {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Número de unidades del item incluidas en la mochila. */
    private int cantidad;

    /** Descripción o nota específica para este item dentro de la mochila; puede ser {@code null}. */
    private String descripcion;

    /** Mochila a la que pertenece este item. Cargado de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mochila_id")
    private Mochila mochila;

    /** Categoría dentro de la mochila a la que está asignado este item. Cargado de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    /** Item del armario del que procede este item de mochila. Cargado de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_armario_id")
    private ItemArmario itemArmario;

}
