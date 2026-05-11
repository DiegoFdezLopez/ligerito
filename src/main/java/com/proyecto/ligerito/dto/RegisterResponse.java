package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta tras un registro exitoso.
 * Devuelve los datos básicos del usuario creado, sin exponer la contraseña.
 */
@Data
public class RegisterResponse {

    private Long id;
    private String nick;
    private String email;

    public RegisterResponse() {
    }

    /**
     * @param id    identificador único del usuario recién creado
     * @param nick  nombre de usuario público
     * @param email email del usuario registrado
     */
    public RegisterResponse(Long id, String nick, String email) {
        this.id = id;
        this.nick = nick;
        this.email = email;
    }
}
