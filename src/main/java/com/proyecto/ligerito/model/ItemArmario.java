package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entidad que representa un item del armario de un usuario.
 * El armario es el inventario personal de equipamiento disponible;
 * cada item almacena su peso en gramos, una descripción opcional
 * y un enlace opcional de referencia o compra.
 */
@Entity
@Table(name = "items_armario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemArmario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    /** Peso del item en gramos. */
    private int peso;

    private String descripcion;

    /** URL de referencia o compra del item; puede ser {@code null}. */
    private String enlace;

    /** Usuario propietario del armario al que pertenece este item. Cargado de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
