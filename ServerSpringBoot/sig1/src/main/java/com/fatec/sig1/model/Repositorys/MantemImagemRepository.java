package com.fatec.sig1.model.Repositorys;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.sig1.model.Imagem.Imagem;

@Repository
public interface MantemImagemRepository extends JpaRepository<Imagem, Long> {
    Optional<Imagem> findByNome(String nome);
}