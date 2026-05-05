package com.proyecto.ligerito.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.ligerito.model.ItemMochila;

/**
 * Repositorio JPA para la entidad {@link ItemMochila}.
 * <p>
 * Proporciona operaciones CRUD básicas heredadas de {@link JpaRepository}
 * y consultas derivadas específicas del dominio.
 * </p>
 */
public interface ItemMochilaRepository extends JpaRepository<ItemMochila, Long> {

    /**
     * Busca un ítem de mochila por la combinación única de ítem de armario,
     * mochila y categoría.
     *
     * @param itemArmarioId identificador del ítem de armario
     * @param mochilaId     identificador de la mochila
     * @param categoriaId   identificador de la categoría
     * @return un {@link Optional} con el ítem encontrado, o vacío si no existe
     */
    Optional<ItemMochila> findByItemArmarioIdAndMochilaIdAndCategoriaId(Long itemArmarioId, Long mochilaId,
            Long categoriaId);

    /**
     * Devuelve todos los ítems pertenecientes a una mochila concreta.
     *
     * @param mochilaId identificador de la mochila
     * @return lista de ítems asociados a la mochila; vacía si no tiene ninguno
     */
    List<ItemMochila> findByMochilaId(Long mochilaId);
}
