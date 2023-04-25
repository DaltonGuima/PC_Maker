package com.fatec.sig1.services.MantemItemBuild;
import com.fatec.sig1.model.Build.ItemBuild;
import java.util.List;
import java.util.Optional;

public interface MantemItemBuild {

    public List<ItemBuild> consultaTodos();

    public void delete(Long id);

    public Optional<ItemBuild> consultaPorId(Long id);

    public Optional<ItemBuild> save(ItemBuild itemBuild);

    public Optional<ItemBuild> atualiza(Long id, ItemBuild itemBuild);

}