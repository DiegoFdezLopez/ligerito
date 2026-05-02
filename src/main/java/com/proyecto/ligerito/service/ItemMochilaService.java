package com.proyecto.ligerito.service;

import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.proyecto.ligerito.dto.ItemMochilaCreateRequest;
import com.proyecto.ligerito.dto.ItemMochilaResponse;
import com.proyecto.ligerito.model.Categoria;
import com.proyecto.ligerito.model.ItemArmario;
import com.proyecto.ligerito.model.ItemMochila;
import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.repository.CategoriaRepository;
import com.proyecto.ligerito.repository.ItemArmarioRepository;
import com.proyecto.ligerito.repository.ItemMochilaRepository;
import com.proyecto.ligerito.repository.MochilaRepository;

@Service
public class ItemMochilaService {

    private final ItemMochilaRepository itemMochilaRepository;
    private final MochilaRepository mochilaRepository;
    private final CategoriaRepository categoriaRepository;
    private final ItemArmarioRepository itemArmarioRepository;

    public ItemMochilaService(ItemMochilaRepository itemMochilaRepository, MochilaRepository mochilaRepository,
            CategoriaRepository categoriaRepository, ItemArmarioRepository itemArmarioRepository) {
        this.itemMochilaRepository = itemMochilaRepository;
        this.mochilaRepository = mochilaRepository;
        this.categoriaRepository = categoriaRepository;
        this.itemArmarioRepository = itemArmarioRepository;
    }

    public ItemMochilaResponse crearItemMochila(ItemMochilaCreateRequest request) {
        Mochila mochila = mochilaRepository.findById(request.getMochilaId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Mochila no encontrada"));

        Categoria categoria = categoriaRepository.findById(request.getCategoriaId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Categoría no encontrada"));

        ItemArmario itemArmario = itemArmarioRepository.findById(request.getItemArmarioId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Item de armario no encontrado"));

        if (!categoria.getMochila().getId().equals(mochila.getId())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "La categoría no pertenece a la mochila indicada");
        }

        Optional<ItemMochila> existente = itemMochilaRepository
                .findByItemArmarioIdAndMochilaIdAndCategoriaId(
                        request.getItemArmarioId(),
                        request.getMochilaId(),
                        request.getCategoriaId());

        ItemMochila guardado;

        if (existente.isPresent()) {
            ItemMochila itemExistente = existente.get();
            itemExistente.setCantidad(itemExistente.getCantidad() + 1);
            guardado = itemMochilaRepository.save(itemExistente);
        } else {
            ItemMochila nuevo = new ItemMochila();
            nuevo.setCantidad(1);
            nuevo.setMochila(mochila);
            nuevo.setCategoria(categoria);
            nuevo.setItemArmario(itemArmario);

            guardado = itemMochilaRepository.save(nuevo);
        }

        return mapToResponse(guardado);
    }

    private ItemMochilaResponse mapToResponse(ItemMochila item) {
        return new ItemMochilaResponse(
                item.getId(),
                item.getItemArmario().getId(),
                item.getMochila().getId(),
                item.getCategoria().getId(),
                item.getCantidad(),
                item.getCategoria().getNombre(),
                item.getItemArmario().getNombre(),
                item.getItemArmario().getPeso(),
                item.getItemArmario().getDescripcion(),
                item.getItemArmario().getEnlace());
    }
}
