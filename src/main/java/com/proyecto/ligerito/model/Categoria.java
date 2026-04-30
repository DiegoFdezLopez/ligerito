package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entidad que representa una categoría dentro de una mochila.
 * Cada categoría pertenece a una {@link Mochila} y sirve para agrupar
 * los items que contiene.
 */
@Entity
@Table(name = "categorias")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    /** Mochila a la que pertenece esta categoría. Cargada de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mochila_id")
    private Mochila mochila;
}
