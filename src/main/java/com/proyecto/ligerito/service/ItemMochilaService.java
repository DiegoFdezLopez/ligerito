package com.proyecto.ligerito.service;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.proyecto.ligerito.dto.ItemMochilaCreateRequest;
import com.proyecto.ligerito.dto.ItemMochilaPatchRequest;
import com.proyecto.ligerito.dto.ItemMochilaResponse;
import com.proyecto.ligerito.model.Categoria;
import com.proyecto.ligerito.model.ItemArmario;
import com.proyecto.ligerito.model.ItemMochila;
import com.proyecto.ligerito.model.Mochila;
import com.proyecto.ligerito.repository.CategoriaRepository;
import com.proyecto.ligerito.repository.ItemArmarioRepository;
import com.proyecto.ligerito.repository.ItemMochilaRepository;
import com.proyecto.ligerito.repository.MochilaRepository;

/**
 * Servicio para la gestión de ítems de mochila.
 * <p>
 * Contiene la lógica de negocio para añadir ítems del armario a una mochila,
 * acumulando cantidad si el ítem ya existe en esa combinación de mochila y
 * categoría.
 * </p>
 */
@Service
public class ItemMochilaService {

    private final ItemMochilaRepository itemMochilaRepository;
    private final MochilaRepository mochilaRepository;
    private final CategoriaRepository categoriaRepository;
    private final ItemArmarioRepository itemArmarioRepository;

    /**
     * Construye el servicio inyectando los repositorios necesarios.
     *
     * @param itemMochilaRepository repositorio de ítems de mochila
     * @param mochilaRepository     repositorio de mochilas
     * @param categoriaRepository   repositorio de categorías
     * @param itemArmarioRepository repositorio de ítems de armario
     */
    public ItemMochilaService(ItemMochilaRepository itemMochilaRepository, MochilaRepository mochilaRepository,
            CategoriaRepository categoriaRepository, ItemArmarioRepository itemArmarioRepository) {
        this.itemMochilaRepository = itemMochilaRepository;
        this.mochilaRepository = mochilaRepository;
        this.categoriaRepository = categoriaRepository;
        this.itemArmarioRepository = itemArmarioRepository;
    }

    /**
     * Crea un nuevo ítem de mochila o incrementa su cantidad si ya existe.
     * <p>
     * Valida que la mochila, la categoría y el ítem de armario existan, y que
     * la categoría pertenezca a la mochila indicada. Si ya existe un registro
     * con la misma combinación, incrementa la cantidad en uno; en caso contrario,
     * crea un nuevo registro con cantidad 1.
     * </p>
     *
     * @param request datos de creación del ítem de mochila
     * @return la representación del ítem creado o actualizado
     * @throws org.springframework.web.server.ResponseStatusException con
     *                                                                {@code 404} si
     *                                                                la mochila,
     *                                                                categoría o
     *                                                                ítem de
     *                                                                armario no
     *                                                                existen,
     *                                                                o con
     *                                                                {@code 400} si
     *                                                                la categoría
     *                                                                no pertenece a
     *                                                                la mochila
     */
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

    /**
     * Convierte una entidad {@link ItemMochila} en su DTO de respuesta.
     *
     * @param item entidad a convertir
     * @return DTO con los datos del ítem de mochila
     */
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

    /**
     * Devuelve todos los ítems asociados a una mochila concreta.
     *
     * @param mochilaId identificador de la mochila cuyos ítems se quieren listar
     * @return lista de DTOs con los ítems de la mochila; vacía si no tiene ninguno
     */
    public List<ItemMochilaResponse> listarPorMochila(Long mochilaId) {
        List<ItemMochila> items = itemMochilaRepository.findByMochilaId(mochilaId);

        return items.stream()
                .map(this::mapToResponse)
                .toList();
    }

    /**
     * Elimina un ítem de mochila por su identificador.
     *
     * @param id identificador único del ítem a eliminar
     * @throws org.springframework.web.server.ResponseStatusException con
     *                                                                {@code 404}
     *                                                                si el ítem no
     *                                                                existe
     */
    public void eliminarPorId(Long id) {
        ItemMochila item = itemMochilaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Item de la mochila no encontrado"));
        itemMochilaRepository.delete(item);
    }

    public ItemMochilaResponse actualizarParcial(Long id, ItemMochilaPatchRequest request) {
        ItemMochila itemMochila = itemMochilaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Item de mochila no encontrado"));

        itemMochila.setCantidad(request.getCantidad());

        ItemMochila guardado = itemMochilaRepository.save(itemMochila);

        return mapToResponse(guardado);
    }
}
