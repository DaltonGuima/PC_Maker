
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

import com.fatec.sig1.model.LocalVenda.LocalVenda;
import com.fatec.sig1.model.LocalVenda.LocalVendaDTO;
import com.fatec.sig1.services.MantemLocalVenda.MantemLocalVenda;

import jakarta.validation.Valid;

@RestController

@RequestMapping("/api/v1/localvendas")
public class APILocalVendaController {

    @Autowired
    MantemLocalVenda mantemLocalVenda;
    LocalVenda localVenda;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin // desabilita o cors do spring security

    @PostMapping
    public ResponseEntity<Object> saveLocalVenda(@RequestBody @Valid LocalVendaDTO localVendaDTO,
            BindingResult result) {
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller validacao da entrada dados invalidos" +
                    result.getFieldError());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(mantemLocalVenda.save(localVendaDTO.retornaUmaLocalVenda()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro não esperado ");
        }
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping
    public ResponseEntity<List<LocalVenda>> consultaTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(mantemLocalVenda.consultaTodos());
    }

    @CrossOrigin // desabilita o cors do spring security

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePorId(@PathVariable(value = "id") Long id) {
        Optional<LocalVenda> localVenda = mantemLocalVenda.consultaPorId(id);
        if (localVenda.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        mantemLocalVenda.delete(localVenda.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body("LocalVenda excluido");
    }

    @CrossOrigin // desabilita o cors do spring security

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualiza(@PathVariable long id, @RequestBody @Valid LocalVendaDTO localVendaDTO,
            BindingResult result) {
        logger.info(">>>>>> api atualiza informações de localVenda chamado");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller atualiza informações de localVenda chamado dados invalidos");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        Optional<LocalVenda> k = mantemLocalVenda.consultaPorId(id);
        if (k.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        Optional<LocalVenda> localVenda = mantemLocalVenda.atualiza(id, localVendaDTO.retornaUmaLocalVenda());
        return ResponseEntity.status(HttpStatus.OK).body(localVenda.get());
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consulta por id chamado");
        Optional<LocalVenda> localVenda = mantemLocalVenda.consultaPorId(id);
        if (localVenda.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(localVenda.get());
    }
}
