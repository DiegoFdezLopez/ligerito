package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DTO para la creación de un ítem en la mochila.
 * Contiene los identificadores necesarios para asociar un ítem del armario
 * a una mochila dentro de una categoría específica.
 */
@Data
public class ItemMochilaCreateRequest {

    @NotNull(message = "La mochila es obligatoria")
    private Long mochilaId;

    @NotNull(message = "La categoría es obligatoria")
    private Long categoriaId;

    @NotNull(message = "El item del armario es obligatorio")
    private Long itemArmarioId;

    public ItemMochilaCreateRequest() {
    }

    /**
     * @param mochilaId     identificador de la mochila a la que se añade el ítem; no puede ser {@code null}
     * @param categoriaId   identificador de la categoría dentro de la mochila; no puede ser {@code null}
     * @param itemArmarioId identificador del ítem del armario que se incluirá; no puede ser {@code null}
     */
    public ItemMochilaCreateRequest(Long mochilaId, Long categoriaId, Long itemArmarioId) {
        this.mochilaId = mochilaId;
        this.categoriaId = categoriaId;
        this.itemArmarioId = itemArmarioId;
    }
}
