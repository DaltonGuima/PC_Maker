package com.fatec.sig1.model.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.sig1.model.LocalVenda.LocalVenda;

public interface MantemLocalVendaRepository extends JpaRepository<LocalVenda, Long> {

}