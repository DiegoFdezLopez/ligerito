package com.proyecto.ligerito.service;

import com.proyecto.ligerito.dto.LoginRequest;
import com.proyecto.ligerito.dto.LoginResponse;
import com.proyecto.ligerito.dto.RegisterRequest;
import com.proyecto.ligerito.exception.EmailDuplicadoException;
import com.proyecto.ligerito.exception.NickDuplicadoException;
import com.proyecto.ligerito.model.Usuario;
import com.proyecto.ligerito.repository.UsuarioRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UsuarioServiceTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UsuarioService usuarioService;

    // ─────────────────────────────────────────────────
    // registrarUsuario
    // ─────────────────────────────────────────────────

    @Test
    void registrarUsuario_datosNuevos_guardaYDevuelveUsuario() {
        RegisterRequest request = new RegisterRequest("pepe", "pepe@mail.com", "1234");

        when(usuarioRepository.existsByEmail("pepe@mail.com")).thenReturn(false);
        when(usuarioRepository.existsByNick("pepe")).thenReturn(false);
        when(passwordEncoder.encode("1234")).thenReturn("$2a$hashed");

        Usuario guardado = new Usuario();
        guardado.setId(1L);
        guardado.setNick("pepe");
        guardado.setEmail("pepe@mail.com");
        guardado.setPassword("$2a$hashed");
        when(usuarioRepository.save(any(Usuario.class))).thenReturn(guardado);

        Usuario resultado = usuarioService.registrarUsuario(request);

        assertNotNull(resultado);
        assertEquals(1L, resultado.getId());
        assertEquals("pepe", resultado.getNick());
        verify(passwordEncoder).encode("1234");
        verify(usuarioRepository).save(any(Usuario.class));
    }

    @Test
    void registrarUsuario_emailDuplicado_lanzaEmailDuplicadoException() {
        RegisterRequest request = new RegisterRequest("pepe", "duplicado@mail.com", "1234");
        when(usuarioRepository.existsByEmail("duplicado@mail.com")).thenReturn(true);

        assertThrows(EmailDuplicadoException.class, () -> usuarioService.registrarUsuario(request));
        verify(usuarioRepository, never()).save(any());
    }

    @Test
    void registrarUsuario_nickDuplicado_lanzaNickDuplicadoException() {
        RegisterRequest request = new RegisterRequest("nickRepetido", "nuevo@mail.com", "1234");
        when(usuarioRepository.existsByEmail("nuevo@mail.com")).thenReturn(false);
        when(usuarioRepository.existsByNick("nickRepetido")).thenReturn(true);

        assertThrows(NickDuplicadoException.class, () -> usuarioService.registrarUsuario(request));
        verify(usuarioRepository, never()).save(any());
    }

    @Test
    void registrarUsuario_emailSeChequeaAntesQueNick() {
        RegisterRequest request = new RegisterRequest("nickRepetido", "emailRepetido@mail.com", "1234");
        when(usuarioRepository.existsByEmail("emailRepetido@mail.com")).thenReturn(true);

        assertThrows(EmailDuplicadoException.class, () -> usuarioService.registrarUsuario(request));
        verify(usuarioRepository, never()).existsByNick(any());
    }

    // ─────────────────────────────────────────────────
    // loginUsuario
    // ─────────────────────────────────────────────────

    @Test
    void loginUsuario_credencialesCorrectas_devuelveLoginResponse() {
        LoginRequest request = new LoginRequest("pepe@mail.com", "1234");

        Usuario usuario = new Usuario();
        usuario.setId(5L);
        usuario.setNick("pepe");
        usuario.setEmail("pepe@mail.com");
        usuario.setPassword("$2a$hashed");

        when(usuarioRepository.findByEmail("pepe@mail.com")).thenReturn(Optional.of(usuario));
        when(passwordEncoder.matches("1234", "$2a$hashed")).thenReturn(true);

        LoginResponse resultado = usuarioService.loginUsuario(request);

        assertNotNull(resultado);
        assertEquals(5L, resultado.getId());
        assertEquals("pepe", resultado.getNick());
        assertEquals("pepe@mail.com", resultado.getEmail());
    }

    @Test
    void loginUsuario_emailNoRegistrado_lanza401() {
        LoginRequest request = new LoginRequest("noexiste@mail.com", "1234");
        when(usuarioRepository.findByEmail("noexiste@mail.com")).thenReturn(Optional.empty());

        ResponseStatusException ex = assertThrows(ResponseStatusException.class,
                () -> usuarioService.loginUsuario(request));
        assertEquals(401, ex.getStatusCode().value());
    }

    @Test
    void loginUsuario_passwordIncorrecta_lanza401() {
        LoginRequest request = new LoginRequest("pepe@mail.com", "wrongPassword");

        Usuario usuario = new Usuario();
        usuario.setPassword("$2a$hashed");
        when(usuarioRepository.findByEmail("pepe@mail.com")).thenReturn(Optional.of(usuario));
        when(passwordEncoder.matches("wrongPassword", "$2a$hashed")).thenReturn(false);

        ResponseStatusException ex = assertThrows(ResponseStatusException.class,
                () -> usuarioService.loginUsuario(request));
        assertEquals(401, ex.getStatusCode().value());
    }

    // ─────────────────────────────────────────────────
    // eliminarUsuario
    // ─────────────────────────────────────────────────

    @Test
    void eliminarUsuario_existente_eliminaCorrectamente() {
        when(usuarioRepository.existsById(1L)).thenReturn(true);

        usuarioService.eliminarUsuario(1L);

        verify(usuarioRepository).deleteById(1L);
    }

    @Test
    void eliminarUsuario_noExiste_lanza404() {
        when(usuarioRepository.existsById(99L)).thenReturn(false);

        ResponseStatusException ex = assertThrows(ResponseStatusException.class,
                () -> usuarioService.eliminarUsuario(99L));
        assertEquals(404, ex.getStatusCode().value());
        verify(usuarioRepository, never()).deleteById(anyLong());
    }
}
