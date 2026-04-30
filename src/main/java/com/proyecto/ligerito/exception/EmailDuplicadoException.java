package com.proyecto.ligerito.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Excepción lanzada cuando se intenta registrar un email que ya está en uso.
 * Produce automáticamente una respuesta HTTP 409 Conflict.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class EmailDuplicadoException extends RuntimeException {

    /**
     * @param message mensaje descriptivo del conflicto
     */
    public EmailDuplicadoException(String message) {
        super(message);
    }
}