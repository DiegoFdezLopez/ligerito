package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DTO para la edición parcial de un ítem de mochila.
 * En esta fase solo permite actualizar la cantidad.
 */
@Data
public class ItemMochilaPatchRequest {

    @NotNull(message = "La cantidad es obligatoria")
    @Min(value = 1, message = "La cantidad debe ser al menos 1")
    private Integer cantidad;

    public ItemMochilaPatchRequest() {
    }

    /**
     * @param cantidad número de unidades del ítem en la mochila; debe ser al menos 1
     */
    public ItemMochilaPatchRequest(Integer cantidad) {
        this.cantidad = cantidad;
    }
}
