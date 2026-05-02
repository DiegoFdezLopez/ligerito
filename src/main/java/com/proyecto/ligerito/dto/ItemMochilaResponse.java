package com.proyecto.ligerito.dto;

/**
 * DTO de respuesta que representa un ítem dentro de una mochila.
 * Combina los datos de identidad del ítem con su información visual y funcional,
 * incluyendo la categoría a la que pertenece y la cantidad registrada en la mochila.
 */
public class ItemMochilaResponse {

//IDENTIDAD
private Long id;
private Long itemArmarioId;
private Long mochilaId;
private Long categoriaId;

//DATOS FUNCIONALES
private int cantidad;
private String categoriaNombre;

//DATOS VISUALES ITEM BASE
private String nombre;
private int peso;
private String descripcion;
private String enlace;

public ItemMochilaResponse() {
}

public ItemMochilaResponse(Long id, Long itemArmarioId, Long mochilaId, Long categoriaId, int cantidad,
        String categoriaNombre, String nombre, int peso, String descripcion, String enlace) {
    this.id = id;
    this.itemArmarioId = itemArmarioId;
    this.mochilaId = mochilaId;
    this.categoriaId = categoriaId;
    this.cantidad = cantidad;
    this.categoriaNombre = categoriaNombre;
    this.nombre = nombre;
    this.peso = peso;
    this.descripcion = descripcion;
    this.enlace = enlace;
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Long getItemArmarioId() {
    return itemArmarioId;
}

public void setItemArmarioId(Long itemArmarioId) {
    this.itemArmarioId = itemArmarioId;
}

public Long getMochilaId() {
    return mochilaId;
}

public void setMochilaId(Long mochilaId) {
    this.mochilaId = mochilaId;
}

public Long getCategoriaId() {
    return categoriaId;
}

public void setCategoriaId(Long categoriaId) {
    this.categoriaId = categoriaId;
}

public int getCantidad() {
    return cantidad;
}

public void setCantidad(int cantidad) {
    this.cantidad = cantidad;
}

public String getCategoriaNombre() {
    return categoriaNombre;
}

public void setCategoriaNombre(String categoriaNombre) {
    this.categoriaNombre = categoriaNombre;
}

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public int getPeso() {
    return peso;
}

public void setPeso(int peso) {
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
