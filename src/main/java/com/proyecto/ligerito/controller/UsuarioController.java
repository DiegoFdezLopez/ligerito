package com.proyecto.ligerito.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.proyecto.ligerito.service.UsuarioService;

/**
 * Controlador REST para operaciones administrativas sobre usuarios.
 * <p>
 * Expone los endpoints bajo {@code /api/usuarios} y delega la lógica
 * de negocio en {@link com.proyecto.ligerito.service.UsuarioService}.
 * El registro e inicio de sesión se gestionan en
 * {@link com.proyecto.ligerito.controller.AuthController}.
 * </p>
 */
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.noContent().build();
    }
}
