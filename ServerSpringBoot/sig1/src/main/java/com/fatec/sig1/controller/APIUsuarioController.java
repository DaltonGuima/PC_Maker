package com.fatec.sig1.controller;

import java.util.List;
import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.sig1.model.Usuario.Usuario;
import com.fatec.sig1.model.Usuario.UsuarioDTO;
import com.fatec.sig1.services.MantemUsuario.MantemUsuario;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/usuarios")
/*
 * Trata as requisicoes HTTP enviadas pelo usuario do servico
 */
public class APIUsuarioController {
    @Autowired
    MantemUsuario mantemUsuario;
    Usuario usuario;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin // desabilita o cors do spring security

    @PostMapping
    public ResponseEntity<Object> saveUsuario(@RequestBody @Valid UsuarioDTO usuarioDTO, BindingResult result) {
        usuario = new Usuario();
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller validacao da entrada dados invalidos" +
                    result.getFieldError());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }

        try {
            usuario.setDataNascimento(usuarioDTO.getDataNascimento());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(mantemUsuario.save(usuarioDTO.retornaUmUsuario()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro não esperado ");
        }
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping
    public ResponseEntity<List<Usuario>> consultaTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(mantemUsuario.consultaTodos());
    }

    @CrossOrigin // desabilita o cors do spring security

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePorId(@PathVariable(value = "id") Long id) {
        Optional<Usuario> usuario = mantemUsuario.consultaPorId(id);
        if (usuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        mantemUsuario.delete(usuario.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body("Usuário excluido");
    }

    @CrossOrigin // desabilita o cors do spring security

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualiza(@PathVariable long id, @RequestBody @Valid UsuarioDTO usuarioDTO,
            BindingResult result) {
        logger.info(">>>>>> api atualiza informações de usuário chamado");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller atualiza informações de usuário chamado dados invalidos");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        Optional<Usuario> u = mantemUsuario.consultaPorId(id);
        if (u.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }

        Optional<Usuario> usuario = mantemUsuario.atualiza(id,
                usuarioDTO.retornaUmUsuario());
        return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consulta por id chamado");
        Optional<Usuario> usuario = mantemUsuario.consultaPorId(id);
        if (usuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
    }

}