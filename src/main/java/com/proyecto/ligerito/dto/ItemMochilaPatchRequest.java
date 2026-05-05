package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

/**
 * DTO para la edición parcial de un ítem de mochila.
 * En esta fase solo permite actualizar la cantidad.
 */
public class ItemMochilaPatchRequest {

    @NotNull(message = "La cantidad es obligatoria")
    @Min(value = 1, message = "La cantidad debe ser al menos 1")
    private Integer cantidad;

    public ItemMochilaPatchRequest() {
    }

    public ItemMochilaPatchRequest(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }
}
