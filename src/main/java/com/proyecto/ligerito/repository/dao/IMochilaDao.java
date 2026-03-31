package com.proyecto.ligerito.repository.dao;

import com.proyecto.ligerito.model.Mochila;
import java.util.List;

public interface IMochilaDao {
    List<Mochila> findAll();
    Mochila findById(Long id);
    void save(Mochila mochila);
    void delete(Long id);
    // Requisito: Cálculo de peso en el DAO (Hibernate)
    int calcularPesoTotal(Long mochilaId);
}