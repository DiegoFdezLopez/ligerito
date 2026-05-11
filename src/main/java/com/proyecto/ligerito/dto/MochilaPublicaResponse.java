package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta para mostrar una mochila pública en el listado general.
 * Incluye el nick del creador y el peso total calculado de todos sus ítems.
 */
@Data
public class MochilaPublicaResponse {

    private Long id;
    private String nombre;
    private String nickUsuario;
    private Integer pesoTotal;

    public MochilaPublicaResponse() {
    }

    /**
     * @param id          identificador único de la mochila pública
     * @param nombre      nombre de la mochila
     * @param nickUsuario nick del usuario que creó la mochila
     * @param pesoTotal   suma del peso de todos los ítems de la mochila, en gramos
     */
    public MochilaPublicaResponse(Long id, String nombre, String nickUsuario, Integer pesoTotal) {
        this.id = id;
        this.nombre = nombre;
        this.nickUsuario = nickUsuario;
        this.pesoTotal = pesoTotal;
    }
}
