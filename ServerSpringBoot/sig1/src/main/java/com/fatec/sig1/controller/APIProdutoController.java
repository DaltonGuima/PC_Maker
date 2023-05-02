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

import com.fatec.sig1.model.Produto.Produto;
import com.fatec.sig1.model.Produto.ProdutoDTO;
import com.fatec.sig1.services.MantemProduto.MantemProduto;
//import com.fatec.sig1.services.MantemProduto.MantemProdutoI;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/produtos")

public class APIProdutoController {
    @Autowired
    MantemProduto mantemProduto;
    Produto produto;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin // desabilita o cors do spring security
    @GetMapping
    public ResponseEntity<List<Produto>> consultaTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(mantemProduto.consultaTodos());
    }

    @CrossOrigin // desabilita o cors do spring security
    @PostMapping
    public ResponseEntity<Object> saveProduto(@RequestBody @Valid ProdutoDTO produtoDTO, BindingResult result) {
        logger.info(">>>>>> chamou");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller validacao da entrada dados invalidos" + result.getFieldError());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(mantemProduto.save(produtoDTO.returnOneProduto()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro não esperado ");
        }
    }

    @CrossOrigin // desabilita o cors do spring security
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePorId(@PathVariable(value = "id") Long id) {
        Optional<Produto> produto = mantemProduto.consultaPorId(id);
        if (produto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        mantemProduto.delete(produto.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente excluido");
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Object> atualiza(@PathVariable long id, @RequestBody @Valid ProdutoDTO produtoDTO,
            BindingResult result) {
        logger.info(">>>>>> api atualiza informações de cliente chamado");
        if (result.hasErrors()) {
            logger.info(">>>>>> apicontroller atualiza informações de cliente chamado dados invalidos");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Dados inválidos.");
        }
        Optional<Produto> p = mantemProduto.consultaPorId(id);
        if (p.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        Optional<Produto> cliente = mantemProduto.atualiza(id, produtoDTO.returnOneProduto());
        return ResponseEntity.status(HttpStatus.OK).body(cliente.get());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consulta por id chamado");
        Optional<Produto> cliente = mantemProduto.consultaPorId(id);
        if (cliente.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(cliente.get());
    }

    @CrossOrigin // desabilita o cors do spring security
    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<Object> consultaPorCategoria(@PathVariable String categoria) {
        logger.info(">>>>>> apicontroller consulta por categoria chamada");
        List<Produto> produto = mantemProduto.consultaPorCategoria(categoria);
        if (produto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Categoria não encontrada.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(mantemProduto.consultaPorCategoria(categoria));
    }
}
