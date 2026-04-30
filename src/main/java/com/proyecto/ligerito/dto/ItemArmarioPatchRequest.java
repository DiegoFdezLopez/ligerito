package com.proyecto.ligerito.dto;

/**
 * DTO para la actualización parcial de un item de armario.
 * Todos los campos son opcionales; solo se aplicarán los que no sean {@code null}.
 */
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

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEnlace() {
        return enlace;
    }

    public void setEnlace(String enlace) {
        this.enlace = enlace;
    }

    
    
    


}
