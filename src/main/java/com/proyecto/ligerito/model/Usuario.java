package com.proyecto.ligerito.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore; // <--- ESTA ES LA CLAVE
import java.util.List;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nick;
    private String email;
    private String password;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore // <--- Esto corta el bucle infinito
    private List<Mochila> mochilas;
}