package com.fatec.sig1.services.MantemLocalVenda;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.sig1.model.LocalVenda.LocalVenda;
import com.fatec.sig1.model.Repositorys.MantemLocalVendaRepository;

@Service
public class MantemLocalVendaI implements MantemLocalVenda {
    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    MantemLocalVendaRepository repository;

    public List<LocalVenda> consultaTodos() {
        logger.info(">>>>>> servico consultaTodos chamado");
        return repository.findAll();
    }

    public void delete(Long id) {
        logger.info(">>>>>> servico delete por id chamado");
        repository.deleteById(id);
    }

    public Optional<LocalVenda> consultaPorId(Long id) {
        logger.info(">>>>>> servico consultaPorId chamado");
        return repository.findById(id);
    }

    public Optional<LocalVenda> atualiza(Long id, LocalVenda localVenda) {
        logger.info(">>>>>> 1.servico atualiza informações de cliente chamado");

        LocalVenda LocalVendaModificado = new LocalVenda(localVenda.getPreco(), localVenda.getVendedor(),
                localVenda.getLinkProduto(), localVenda.getProduto());
        LocalVendaModificado.setId(id);
        return Optional.ofNullable(repository.save(LocalVendaModificado));

    }

    public Optional<LocalVenda> save(LocalVenda LocalVenda) {
        logger.info(">>>>>> servico save chamado ");
        return Optional.ofNullable(repository.save(LocalVenda));
    }
}
