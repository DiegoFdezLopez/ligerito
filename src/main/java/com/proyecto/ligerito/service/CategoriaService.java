package com.proyecto.ligerito.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.proyecto.ligerito.dto.CategoriaCreateRequest;
import com.proyecto.ligerito.dto.CategoriaResponse;
import com.proyecto.ligerito.model.Categoria;
import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.repository.CategoriaRepository;
import com.proyecto.ligerito.repository.MochilaRepository;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;
    private final MochilaRepository mochilaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository, MochilaRepository mochilaRepository) {
        this.categoriaRepository = categoriaRepository;
        this.mochilaRepository = mochilaRepository;
    }

    public CategoriaResponse crearCategoria(CategoriaCreateRequest request) {

        Mochila mochila = mochilaRepository.findById(request.getMochilaId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Mochila no encontrada"));

        boolean yaExiste = categoriaRepository.existsByNombreIgnoreCaseAndMochilaId(
                request.getNombre(),
                request.getMochilaId());

        if (yaExiste) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Ya existe una categoría con ese nombre en esta mochila");
        }

        Categoria nuevaCategoria = new Categoria();
        nuevaCategoria.setNombre(request.getNombre());
        nuevaCategoria.setMochila(mochila);

        Categoria guardada = categoriaRepository.save(nuevaCategoria);

        return new CategoriaResponse(
                guardada.getId(),
                guardada.getNombre());
    }

    public void eliminarPorId(Long id) {
        Categoria categoria = categoriaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Categoria no encontrada"));
        categoriaRepository.delete(categoria);
    }

    public List<CategoriaResponse> listarPorMochila(Long mochilaId) {
        List<Categoria> categorias = categoriaRepository.findByMochilaId(mochilaId);

        return categorias.stream()
                .map(c -> new CategoriaResponse(
                        c.getId(),
                        c.getNombre()))
                .toList();
    }

}
