package com.proyecto.ligerito.dto;

/**
 * DTO de respuesta con los datos de una mochila.
 * Se devuelve en las operaciones de consulta, creación y actualización.
 */
public class MochilaResponse {

    private Long id;
    private String nombre;
    private boolean esPublica;

    public MochilaResponse() {
    }

    /**
     * @param id        identificador único de la mochila
     * @param nombre    nombre de la mochila
     * @param esPublica {@code true} si la mochila es visible para otros usuarios
     */
    public MochilaResponse(Long id, String nombre, boolean esPublica) {
        this.id = id;
        this.nombre = nombre;
        this.esPublica = esPublica;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isEsPublica() {
        return esPublica;
    }

    public void setEsPublica(boolean esPublica) {
        this.esPublica = esPublica;
    }
}