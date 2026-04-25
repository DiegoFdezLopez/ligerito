package com.proyecto.ligerito.dto;

public class ItemArmarioPatchRequest {
    
    private Integer peso;
    private String descripcion;
    private String enlace;

    public ItemArmarioPatchRequest() {
    }

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
