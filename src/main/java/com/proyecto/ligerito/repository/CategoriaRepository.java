package com.proyecto.ligerito.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.proyecto.ligerito.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    boolean existsByNombreIgnoreCaseAndMochilaId(String nombre, Long mochilaId);

    List<Categoria> findByMochilaId(Long mochilaId);

}
