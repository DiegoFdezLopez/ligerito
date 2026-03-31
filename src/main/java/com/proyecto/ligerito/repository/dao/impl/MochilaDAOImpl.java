package com.proyecto.ligerito.repository.dao.impl;

import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.repository.dao.IMochilaDao;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
public class MochilaDAOImpl implements IMochilaDao {

    @PersistenceContext
    private EntityManager entityManager; // Tu motor de Hibernate [cite: 13, 64]

    @Override
    public List<Mochila> findAll() {
        return entityManager.createQuery("from Mochila", Mochila.class).getResultList();
    }

    @Override
    public Mochila findById(Long id) {
        return entityManager.find(Mochila.class, id);
    }

    @Override
    @Transactional
    public void save(Mochila mochila) {
        if (mochila.getId() != null) {
            entityManager.merge(mochila);
        } else {
            entityManager.persist(mochila);
        }
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Mochila mochila = findById(id);
        if (mochila != null) {
            entityManager.remove(mochila);
        }
    }

    @Override
    public int calcularPesoTotal(Long mochilaId) {
        String hql = "SELECT SUM(i.peso * i.cantidad) FROM Item i WHERE i.mochila.id = :id";
        Long suma = entityManager.createQuery(hql, Long.class)
                                 .setParameter("id", mochilaId)
                                 .getSingleResult();
        return suma != null ? suma.intValue() : 0;
    }
}