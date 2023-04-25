
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

import com.fatec.sig1.model.Build.ItemBuild;
import com.fatec.sig1.model.Build.ItemBuildDTO;
import com.fatec.sig1.model.Produto.Produto;
import com.fatec.sig1.services.MantemItemBuild.MantemItemBuild;

import jakarta.validation.Valid;

@RestController

@RequestMapping("/api/v1/itensbuilds")
public class APIItemBuildController {

    @Autowired
    MantemItemBuild mantemItemBuild;
    ItemBuild itemBuild;
    Produto produto;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin // desabilita o cors do spring security

    @PostMapping
    public ResponseEntity<Object> ItemBuild(@RequestBody @Valid ItemBuildDTO itemBuildDTO, BindingResult result) {
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller validacao da entrada dados invalidos" +
                    result.getFieldError());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(mantemItemBuild.save(itemBuildDTO.retornaItensBuild()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro não esperado ");
        }
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping
    public ResponseEntity<List<ItemBuild>> consultaTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(mantemItemBuild.consultaTodos());
    }

    @CrossOrigin // desabilita o cors do spring security

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePorId(@PathVariable(value = "id") Long id) {
        Optional<ItemBuild> itemBuild = mantemItemBuild.consultaPorId(id);
        if (itemBuild.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        mantemItemBuild.delete(itemBuild.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente excluido");
    }

    @CrossOrigin // desabilita o cors do spring security

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualiza(@PathVariable long id, @RequestBody @Valid ItemBuildDTO itemBuildDTO,
            BindingResult result) {
        logger.info(">>>>>> api atualiza informações de cliente chamado");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller atualiza informações de cliente chamado dados invalidos");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        Optional<ItemBuild> c = mantemItemBuild.consultaPorId(id);

        if (c.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        Optional<ItemBuild> itemBuild = mantemItemBuild.atualiza(id, itemBuildDTO.retornaItensBuild());
        return ResponseEntity.status(HttpStatus.OK).body(itemBuild.get());
    }

    @CrossOrigin // desabilita o cors do spring security

    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consulta por id chamado");
        Optional<ItemBuild> itemBuild = mantemItemBuild.consultaPorId(id);
        if (itemBuild.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(itemBuild.get());
    }
}