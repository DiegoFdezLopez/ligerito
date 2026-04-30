package com.proyecto.ligerito.dto;

/**
 * DTO de respuesta tras un registro exitoso.
 * Devuelve los datos básicos del usuario creado, sin exponer la contraseña.
 */
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