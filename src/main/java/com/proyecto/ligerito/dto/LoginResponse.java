package com.proyecto.ligerito.dto;

import lombok.Data;

/**
 * DTO de respuesta tras una autenticación exitosa.
 * Devuelve los datos básicos del usuario identificado, sin exponer la contraseña.
 */
@Data
public class LoginResponse {

    private Long id;
    private String nick;
    private String email;

    public LoginResponse() {
    }

    /**
     * @param id    identificador único del usuario autenticado
     * @param nick  nombre de usuario público
     * @param email email del usuario autenticado
     */
    public LoginResponse(Long id, String nick, String email) {
        this.id = id;
        this.nick = nick;
        this.email = email;
    }
}
