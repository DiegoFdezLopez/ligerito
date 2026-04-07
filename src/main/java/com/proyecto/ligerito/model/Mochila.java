package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

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
    private boolean esPublica;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "mochila", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Categoria> categorias = new ArrayList<>();

    @OneToMany(mappedBy = "mochila", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<ItemMochila> itemsMochila = new ArrayList<>();
}