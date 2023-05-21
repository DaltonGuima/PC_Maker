package com.fatec.sig1.services.MantemProduto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.sig1.model.Produto.Produto;
import com.fatec.sig1.model.Repositorys.MantemProdutoRepository;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;

@Service
public class MantemProdutoI implements MantemProduto {
    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    MantemProdutoRepository repository;

    public List<Produto> consultaTodos() {
        logger.info(">>>>>> servico consultaTodos chamado");
        return repository.findAll();
    }

    public void delete(Long id) {
        logger.info(">>>>>> servico delete por id chamado");
        repository.deleteById(id);
    }

    public Optional<Produto> consultaPorId(Long id) {
        logger.info(">>>>>> servico consultaPorId chamado");
        return repository.findById(id);
    }

    public List<Produto> consultaPorCategoria(String categoria) {
        logger.info(">>>>>> servico consultaPorCategoria chamado");
        return repository.findByCategoria(categoria);
    }

    public Optional<Produto> atualiza(Long id, Produto produto) {
        logger.info(">>>>>> 1.servico atualiza informações de cliente chamado");

        Produto produtoModificado = new Produto(produto.getNome(), produto.getFabricante(), produto.getModelo(),
                produto.getEspecificacoes(), produto.getCategoria(),
                produto.getLocaisVendas(), produto.getCusto());
        produtoModificado.setId(id);
        produtoModificado.obtemDataAtual(new DateTime());
        return Optional.ofNullable(repository.save(produtoModificado));

    }

    public Optional<Produto> save(Produto produto) {
        logger.info(">>>>>> servico save chamado ");
        produto.setDataCadastro(new DateTime());
        return Optional.ofNullable(repository.save(produto));
    }
}