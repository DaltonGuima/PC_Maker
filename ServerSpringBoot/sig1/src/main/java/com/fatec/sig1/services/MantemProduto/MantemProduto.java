package com.fatec.sig1.services.MantemProduto;

import java.util.List;
import java.util.Optional;

import com.fatec.sig1.model.Produto.Produto;

public interface MantemProduto {
    List<Produto> consultaTodos();

    void delete(Long id);

    Optional<Produto> consultaPorId(Long id);

    Optional<Produto> atualiza(Long id, Produto produto);

    Optional<Produto> save(Produto produto);

    Optional<Produto> consultaPorCategoria(String categoria);

}