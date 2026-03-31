package com.proyecto.ligerito.service;

import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.repository.dao.IMochilaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MochilaService {

    @Autowired
    private IMochilaDao mochilaDao;

    public List<Mochila> listarTodas() {
        return mochilaDao.findAll();
    }

    public void guardar(Mochila mochila) {
        mochilaDao.save(mochila);
    }

    public int obtenerPesoMochila(Long id) {
        return mochilaDao.calcularPesoTotal(id);
    }
}