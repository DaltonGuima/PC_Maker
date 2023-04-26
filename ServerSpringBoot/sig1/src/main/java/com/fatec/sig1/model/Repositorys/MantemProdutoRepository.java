package com.fatec.sig1.model.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatec.sig1.model.Produto.Produto;

import java.util.Optional;

public interface MantemProdutoRepository extends JpaRepository<Produto, Long> {

    Optional<Produto> findByCategoria(String categoria);
}