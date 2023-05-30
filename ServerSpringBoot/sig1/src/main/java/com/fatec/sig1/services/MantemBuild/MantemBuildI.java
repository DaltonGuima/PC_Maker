package com.fatec.sig1.services.MantemBuild;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.sig1.model.Build.Build;
import com.fatec.sig1.model.Repositorys.MantemBuildRepository;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;

@Service
public class MantemBuildI implements MantemBuild {

    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    MantemBuildRepository repository;

    public List<Build> consultaTodos() {
        logger.info(">>>>>> servico consultaTodos chamado");
        return repository.findAll();
    }

    @Override
    public void delete(Long id) {
        logger.info(">>>>>> servico delete por id chamado");
        repository.deleteById(id);
    }

    @Override
    public Optional<Build> consultaPorId(Long id) {
        logger.info(">>>>>> servico consultaPorId chamado");
        return repository.findById(id);
    }

    @Override
    public Optional<Build> consultaPorNome(String Nome) {
        logger.info(">>>>>> servico consultaPorNome chamado");
        return repository.findByNome(Nome);
    }

    @Override
    public Optional<Build> save(Build build) {
        logger.info(">>>>>> servico save chamado ");
        build.setDataCadastro(new DateTime());
        return Optional.ofNullable(repository.save(build));
    }

    @Override
    public Optional<Build> atualiza(Long id, Build build) {
        logger.info(">>>>>> 1.servico atualiza informações de cliente chamado");
        Build buildModificado = new Build(build.getNome(), build.getDescricao(), build.getUsuario());
        buildModificado.setId(id);
        buildModificado.obtemDataAtual(new DateTime());
        return Optional.ofNullable(repository.save(buildModificado));
    }
}