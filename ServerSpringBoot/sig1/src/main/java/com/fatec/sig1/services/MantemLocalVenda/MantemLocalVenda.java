package com.fatec.sig1.services.MantemLocalVenda;

import java.util.List;
import java.util.Optional;

import com.fatec.sig1.model.LocalVenda.LocalVenda;

public interface MantemLocalVenda {
    List<LocalVenda> consultaTodos();

    void delete(Long id);

    Optional<LocalVenda> consultaPorId(Long id);

    Optional<LocalVenda> save(LocalVenda localVenda);

    Optional<LocalVenda> atualiza(Long id, LocalVenda localVenda);

}