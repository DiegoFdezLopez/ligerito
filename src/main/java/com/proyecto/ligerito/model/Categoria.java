package com.proyecto.ligerito.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    /** Identificador único de la categoría, generado automáticamente. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Nombre descriptivo de la categoría. */
    private String nombre;

    /** Mochila a la que pertenece esta categoría. Cargada de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mochila_id")
    private Mochila mochila;

    /**
     * Lista de items agrupados bajo esta categoría.
     * Se eliminarán en cascada si la categoría es borrada.
     */
    @OneToMany(mappedBy = "categoria", cascade= CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ItemMochila> itemsMochila = new ArrayList<>();

}
