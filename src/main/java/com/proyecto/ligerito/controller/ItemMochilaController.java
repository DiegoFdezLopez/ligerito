package com.proyecto.ligerito.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.proyecto.ligerito.dto.ItemMochilaCreateRequest;
import com.proyecto.ligerito.dto.ItemMochilaPatchRequest;
import com.proyecto.ligerito.dto.ItemMochilaResponse;
import com.proyecto.ligerito.service.ItemMochilaService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;


/**
 * Controlador REST para la gestión de ítems de mochila.
 * <p>
 * Expone los endpoints bajo {@code /api/items-mochila} y delega la lógica
 * de negocio en {@link ItemMochilaService}.
 * </p>
 */
@RestController
@RequestMapping("/api/items-mochila")
@CrossOrigin(origins = { "http://localhost:5173", "http://127.0.0.1:5173" })
@Tag(name = "ItemMochila", description = "Items de una mochila")
public class ItemMochilaController {

    private final ItemMochilaService itemMochilaService;

    /**
     * Construye el controlador inyectando el servicio de ítems de mochila.
     *
     * @param itemMochilaService servicio que gestiona la lógica de ítems de mochila
     */
    public ItemMochilaController(ItemMochilaService itemMochilaService) {
        this.itemMochilaService = itemMochilaService;
    }

    /**
     * Crea un nuevo ítem en una mochila.
     *
     * @param request datos necesarios para crear el ítem; se validan con
     *                {@code @Valid}
     * @return el ítem creado con su información persistida
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ItemMochilaResponse crearItemMochila(@Valid @RequestBody ItemMochilaCreateRequest request) {
        return itemMochilaService.crearItemMochila(request);
    }

    /**
     * Devuelve todos los ítems pertenecientes a una mochila concreta.
     *
     * @param mochilaId identificador de la mochila cuyos ítems se quieren listar
     * @return lista de ítems asociados a la mochila indicada
     */
    @GetMapping
    public List<ItemMochilaResponse> listarPorMochila(@RequestParam Long mochilaId) {
        return itemMochilaService.listarPorMochila(mochilaId);
    }

    /**
     * Elimina un ítem de mochila por su identificador.
     *
     * @param id identificador único del ítem a eliminar
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarItemMochila(@PathVariable Long id){
        itemMochilaService.eliminarPorId(id);
    }

    @PatchMapping("/{id}")
    public ItemMochilaResponse actualizarItemMochila(
        @PathVariable Long id,
        @Valid @RequestBody ItemMochilaPatchRequest request) {
            return itemMochilaService.actualizarParcial(id, request);
        }
}
