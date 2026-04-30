package com.proyecto.ligerito.dto;

/**
 * DTO de respuesta tras una autenticación exitosa.
 * Devuelve los datos básicos del usuario identificado, sin exponer la contraseña.
 */
public class LoginResponse {

    private String nick;
    private String email;
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
