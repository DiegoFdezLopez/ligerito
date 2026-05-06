package com.proyecto.ligerito.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.proyecto.ligerito.dto.ItemArmarioCreateRequest;
import com.proyecto.ligerito.dto.ItemArmarioPatchRequest;
import com.proyecto.ligerito.dto.ItemArmarioResponse;
import com.proyecto.ligerito.model.ItemArmario;
import com.proyecto.ligerito.model.Usuario;
import com.proyecto.ligerito.repository.ItemArmarioRepository;
import com.proyecto.ligerito.repository.UsuarioRepository;

/**
 * Servicio que gestiona la lógica de negocio de los items del armario.
 * Permite listar, crear, actualizar parcialmente y eliminar items,
 * asegurando que cada item quede vinculado a un {@link com.proyecto.ligerito.model.Usuario} válido.
 */
@Service
public class ItemArmarioService {

    private final ItemArmarioRepository itemArmarioRepository;
    private final UsuarioRepository usuarioRepository;

    public ItemArmarioService(ItemArmarioRepository itemArmarioRepository, UsuarioRepository usuarioRepository) {
        this.itemArmarioRepository = itemArmarioRepository;
        this.usuarioRepository = usuarioRepository;
    }

    /**
     * Devuelve todos los items de armario almacenados en base de datos.
     *
     * @return lista de {@link ItemArmarioResponse} con los datos de cada item
     */
    public List<ItemArmarioResponse> listarPorUsuario(Long usuarioId) {
        return itemArmarioRepository.findByUsuarioId(usuarioId).stream()
                .map(item -> new ItemArmarioResponse(
                        item.getId(),
                        item.getNombre(),
                        item.getPeso(),
                        item.getDescripcion(),
                        item.getEnlace()))
                .toList();
    }

    /**
     * Elimina el item de armario con el ID indicado.
     *
     * @param id ID del item a eliminar
     * @throws ResponseStatusException 404 si el item no existe
     */
    public void eliminarPorId(Long id) {
        ItemArmario item = itemArmarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Item de armario no encontrado"));

        itemArmarioRepository.delete(item);
    }

    /**
     * Actualiza parcialmente un item de armario existente.
     * Solo se modifican los campos no nulos del request; el peso además se valida para que no sea negativo.
     *
     * @param id      ID del item a actualizar
     * @param request campos opcionales a actualizar (peso, descripción y/o enlace)
     * @return {@link ItemArmarioResponse} con los datos actualizados del item
     * @throws ResponseStatusException 404 si el item no existe
     * @throws ResponseStatusException 400 si el peso proporcionado es negativo
     */
    public ItemArmarioResponse actualizarParcial(Long id, ItemArmarioPatchRequest request) {
        ItemArmario item = itemArmarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Item de armario no encontrado"));

        if (request.getPeso() != null) {
            if (request.getPeso() < 0) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "El peso no puede ser negativo");
            }
            item.setPeso(request.getPeso());
        }

        if (request.getDescripcion() != null) {
            item.setDescripcion(request.getDescripcion());
        }

        if (request.getEnlace() != null) {
            item.setEnlace(request.getEnlace());
        }

        ItemArmario guardado = itemArmarioRepository.save(item);

        return new ItemArmarioResponse(
                guardado.getId(),
                guardado.getNombre(),
                guardado.getPeso(),
                guardado.getDescripcion(),
                guardado.getEnlace());
    }

    /**
     * Crea un nuevo item de armario y lo asocia al usuario indicado en el request.
     *
     * @param request datos del item a crear (nombre, peso, descripción, enlace e ID de usuario)
     * @return {@link ItemArmarioResponse} con los datos del item recién creado
     * @throws ResponseStatusException 404 si el usuario no existe
     */
    public ItemArmarioResponse crearItemArmario(ItemArmarioCreateRequest request) {
        Usuario usuario = usuarioRepository.findById(request.getUsuarioId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Usuario no encontrado"));

        ItemArmario nuevoItem = new ItemArmario(
                null,
                request.getNombre(),
                request.getPeso(),
                request.getDescripcion(),
                request.getEnlace(),
                usuario);

        ItemArmario guardado = itemArmarioRepository.save(nuevoItem);

        return new ItemArmarioResponse(
                guardado.getId(),
                guardado.getNombre(),
                guardado.getPeso(),
                guardado.getDescripcion(),
                guardado.getEnlace());
    }

}