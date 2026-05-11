package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO para la actualización parcial de un item de armario.
 * Todos los campos son opcionales; solo se aplicarán los que no sean {@code null}.
 */
@Data
public class ItemArmarioPatchRequest {

    private Integer peso;
    private String descripcion;
    private String enlace;

    public ItemArmarioPatchRequest() {
    }

    /**
     * @param peso        nuevo peso en gramos; {@code null} para no modificarlo
     * @param descripcion nueva descripción; {@code null} para no modificarla
     * @param enlace      nueva URL de referencia o compra; {@code null} para no modificarla
     */
    public ItemArmarioPatchRequest(Integer peso, String descripcion, String enlace) {
        this.peso = peso;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
