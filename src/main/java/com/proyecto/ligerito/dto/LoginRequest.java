package com.proyecto.ligerito.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * DTO con las credenciales necesarias para autenticar a un usuario.
 * Ambos campos son obligatorios y el email debe tener formato válido.
 */
@Data
public class LoginRequest {

    @NotBlank(message = "El email no puede estar vacío")
    @Email(message = "El email no tiene un formato válido")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    private String password;

    public LoginRequest() {
    }

    /**
     * @param email    email del usuario; debe tener formato válido y no estar vacío
     * @param password contraseña del usuario; no puede estar vacía
     */
    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
