package com.proyecto.ligerito.model;

import jakarta.persistence.*;

//anti boilerplate (codigo repetitivo)
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;
import java.util.ArrayList;

//evitar el bucle infinito que me salía en el navegador con los test
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//Anotacion para que la clase sea una tabla
@Entity
//Nombre de la tabla en la base de datos
@Table(name = "mochilas")
//Genera getters,setters,toString, equals y hashcode
@Data
//el constructor sin argumentos que necesito para hibernate
@NoArgsConstructor
//el constructor con todos los argumentos que necesito para hibernate
@AllArgsConstructor
public class Mochila {

    @Id
    //creo el id de manera incremental mirando el último creado
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String descripcion;

    @Column(name = "es_publica")
    private boolean esPublica;

    @Column(name = "peso_total")
    private int pesoTotal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties("mochilas")
    private Usuario usuario;

    // Relación fundamental: Borrado en cascada de ítems
    @OneToMany(mappedBy = "mochila", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items = new ArrayList<>();
}