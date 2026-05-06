package com.proyecto.ligerito.repository;

import com.proyecto.ligerito.model.ItemArmario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemArmarioRepository extends JpaRepository<ItemArmario, Long> {

    List<ItemArmario> findByUsuarioId(Long usuarioId);
}