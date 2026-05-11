package com.proyecto.ligerito.dto;

import java.util.List;
import lombok.Data;

/**
 * DTO para mostrar el detalle público de una mochila compartida.
 * Incluye el listado de categorías y todos los ítems con su información completa.
 */
@Data
public class MochilaPublicaDetalleResponse {

    private Long id;
    private String nombre;
    private String nickUsuario;
    private Integer pesoTotal;
    private List<String> categorias;
    private List<ItemPublicoResponse> items;

    public MochilaPublicaDetalleResponse() {
    }

    /**
     * @param id          identificador único de la mochila
     * @param nombre      nombre de la mochila
     * @param nickUsuario nick del usuario que creó la mochila
     * @param pesoTotal   peso total de todos los ítems en gramos
     * @param categorias  lista de nombres de categorías presentes en la mochila
     * @param items       lista de ítems con toda su información
     */
    public MochilaPublicaDetalleResponse(Long id, String nombre, String nickUsuario, Integer pesoTotal,
            List<String> categorias, List<ItemPublicoResponse> items) {
        this.id = id;
        this.nombre = nombre;
        this.nickUsuario = nickUsuario;
        this.pesoTotal = pesoTotal;
        this.categorias = categorias;
        this.items = items;
    }
}
