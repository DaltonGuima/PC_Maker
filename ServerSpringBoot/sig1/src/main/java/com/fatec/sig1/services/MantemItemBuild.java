package com.fatec.sig1.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.sig1.model.Build.Build;
import com.fatec.sig1.model.Build.ItemBuild;
import com.fatec.sig1.model.Repositorys.MantemItemBuildRepository;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;

@Service
public class MantemItemBuild {

    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    MantemItemBuildRepository repository;

    public List<ItemBuild> consultaTodos() {
        logger.info(">>>>>> servico consultaTodos chamado");
        return repository.findAll();
    }

    public void delete(Long id) {
        logger.info(">>>>>> servico delete por id chamado");
        repository.deleteById(id);
    }

    public Optional<ItemBuild> consultaPorId(Long id) {
        logger.info(">>>>>> servico consultaPorId chamado");
        return repository.findById(id);
    }

    public Optional<ItemBuild> save(ItemBuild itemBuild) {
        logger.info(">>>>>> servico save chamado ");
        ItemBuild.setDataCadastro(new DateTime());
        return Optional.ofNullable(repository.save(itemBuild));
    }

    public Optional<ItemBuild> atualiza(Long id, ItemBuild itemBuild) {
        logger.info(">>>>>> 1.servico   atualiza informações de cliente chamado");
        ItemBuild itemBuildModificado = new ItemBuild(itemBuild.getQuantidade(), itemBuild.getBuild(),
                itemBuild.getProduto());
        itemBuildModificado.setId(id);
        itemBuildModificado.obtemDataAtual(new DateTime());
        logger.info(itemBuildModificado.getId());
        return Optional.ofNullable(repository.save(itemBuildModificado));
    }

}