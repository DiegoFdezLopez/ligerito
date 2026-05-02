package com.proyecto.ligerito.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.ligerito.model.ItemMochila;

public interface ItemMochilaRepository extends JpaRepository<ItemMochila, Long> {

    Optional<ItemMochila> findByItemArmarioIdAndMochilaIdAndCategoriaId(Long itemArmarioId, Long mochilaId,
            Long categoriaId);
}
