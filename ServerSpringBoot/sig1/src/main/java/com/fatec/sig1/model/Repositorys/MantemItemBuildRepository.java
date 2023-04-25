package com.fatec.sig1.model.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.sig1.model.Build.ItemBuild;

public interface MantemItemBuildRepository extends JpaRepository<ItemBuild, Long> {

}