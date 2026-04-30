package com.proyecto.ligerito.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.ligerito.model.Usuario;


/**
 * Repositorio JPA para la entidad {@link com.proyecto.ligerito.model.Usuario}.
 * Hereda las operaciones CRUD estándar de {@link JpaRepository} y expone
 * consultas derivadas usadas principalmente en el registro y la autenticación.
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /**
     * Comprueba si ya existe un usuario con el email indicado.
     *
     * @param email email a verificar
     * @return {@code true} si el email ya está registrado, {@code false} en caso contrario
     */
    boolean existsByEmail(String email);

    /**
     * Busca un usuario por su email.
     *
     * @param email email del usuario a buscar
     * @return {@link Optional} con el usuario si existe, o vacío si no se encuentra
     */
    Optional<Usuario> findByEmail(String email);

    /**
     * Comprueba si ya existe un usuario con el nick indicado.
     *
     * @param nick nick a verificar
     * @return {@code true} si el nick ya está en uso, {@code false} en caso contrario
     */
    boolean existsByNick(String nick);
}
