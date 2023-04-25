package com.fatec.sig1.model.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.sig1.model.Build.Build;

import java.util.List;
import java.util.Optional;

public interface MantemBuildRepository extends JpaRepository<Build, Long> {
    Optional<Build> findByNome(String nome);

    List<Build> findAllByNomeIgnoreCaseContaining(String nome);

}