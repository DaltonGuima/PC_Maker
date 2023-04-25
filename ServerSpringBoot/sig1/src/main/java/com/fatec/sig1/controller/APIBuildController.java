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

import com.fatec.sig1.model.Build.Build;
import com.fatec.sig1.model.Build.BuildDTO;
import com.fatec.sig1.services.MantemBuild.MantemBuild;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/builds")
public class APIBuildController {
    @Autowired
    MantemBuild mantemBuild;
    Build build;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin // desabilita o cors do spring security
    @PostMapping
    public ResponseEntity<Object> saveBuild(@RequestBody @Valid BuildDTO buildDTO, BindingResult result) {
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller validacao da entrada dados invalidos" + result.getFieldError());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(mantemBuild.save(buildDTO.retornaUmaBuild()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro não esperado ");
        }
    }

    @CrossOrigin // desabilita o cors do spring security
    @GetMapping
    public ResponseEntity<List<Build>> consultaTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(mantemBuild.consultaTodos());
    }

    @CrossOrigin // desabilita o cors do spring security
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePorId(@PathVariable(value = "id") Long id) {
        Optional<Build> build = mantemBuild.consultaPorId(id);
        if (build.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        mantemBuild.delete(build.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente excluido");
    }

    @CrossOrigin // desabilita o cors do spring security
    @PutMapping("/{id}")
    public ResponseEntity<Object> atualiza(@PathVariable long id, @RequestBody @Valid BuildDTO buildDTO,
            BindingResult result) {
        logger.info(">>>>>> api atualiza informações de cliente chamado");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller atualiza informações de cliente chamado dados invalidos");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        Optional<Build> c = mantemBuild.consultaPorId(id);
        if (c.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        Optional<Build> build = mantemBuild.atualiza(id, buildDTO.retornaUmaBuild());
        return ResponseEntity.status(HttpStatus.OK).body(build.get());
    }

    @CrossOrigin // desabilita o cors do spring security
    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consulta por id chamado");
        Optional<Build> build = mantemBuild.consultaPorId(id);
        if (build.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(build.get());
    }
}