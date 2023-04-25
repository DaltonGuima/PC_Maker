package com.fatec.sig1.services.MantemBuild;

import java.util.List;
import java.util.Optional;

import com.fatec.sig1.model.Build.Build;

public interface MantemBuild {
    List<Build> consultaTodos();

    void delete(Long id);

    Optional<Build> consultaPorId(Long id);

    Optional<Build> consultaPorNome(String Nome);

    Optional<Build> save(Build build);

    Optional<Build> atualiza(Long id, Build build);

}
