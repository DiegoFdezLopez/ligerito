package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

/**
 * Entidad que representa una mochila de un usuario.
 * Una mochila agrupa {@link Categoria categorías} e {@link ItemMochila items},
 * y puede ser pública (visible para otros usuarios) o privada.
 */
@Entity
@Table(name = "mochilas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mochila {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    /** Indica si la mochila es visible para otros usuarios. */
    private boolean esPublica;

    /** Usuario propietario de la mochila. Cargado de forma lazy. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    /**
     * Categorías que pertenecen a esta mochila.
     * {@code orphanRemoval} garantiza que una categoría se elimine de la base de datos
     * en cuanto deje de estar asociada a esta mochila.
     * {@code @JsonIgnore} evita referencias circulares al serializar.
     */
    @OneToMany(mappedBy = "mochila", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Categoria> categorias = new ArrayList<>();

    /**
     * Items incluidos en esta mochila.
     * {@code orphanRemoval} garantiza que un item se elimine de la base de datos
     * en cuanto deje de estar asociado a esta mochila.
     * {@code @JsonIgnore} evita referencias circulares al serializar.
     */
    @OneToMany(mappedBy = "mochila", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ItemMochila> itemsMochila = new ArrayList<>();
}