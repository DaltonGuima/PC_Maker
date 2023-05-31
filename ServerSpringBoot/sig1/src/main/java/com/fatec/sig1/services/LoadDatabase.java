package com.fatec.sig1.services;

import java.util.HashMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fatec.sig1.model.Build.Build;
import com.fatec.sig1.model.Build.ItemBuild;
import com.fatec.sig1.model.Cliente.Cliente;
import com.fatec.sig1.model.LocalVenda.LocalVenda;
import com.fatec.sig1.model.Produto.Produto;
import com.fatec.sig1.model.Repositorys.MantemBuildRepository;
import com.fatec.sig1.model.Repositorys.MantemItemBuildRepository;
import com.fatec.sig1.model.Repositorys.MantemLocalVendaRepository;
import com.fatec.sig1.model.Repositorys.MantemProdutoRepository;
import com.fatec.sig1.model.Repositorys.MantemUsuarioRepository;
import com.fatec.sig1.model.Usuario.Usuario;

@Configuration
class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Autowired

    /**
     * @param repository
     * @param repository2
     * @return
     */
    @Bean
    CommandLineRunner initDatabase(MantemProdutoRepository repository2,
            MantemBuildRepository repository3, MantemItemBuildRepository repository4,
            MantemUsuarioRepository repository5, MantemLocalVendaRepository repository6) {
        return args -> {

            // Produto
            HashMap<String, String> teste = new HashMap<String, String>();

            teste.put("tipo", "Mid Tower");

            Produto produto1 = new Produto("Rise Mode Glass 06", "Rise", "RM-WT-06-SF",
                    teste, "Gabinete");
            repository2.save(produto1);

            LocalVenda local1 = new LocalVenda(2, "a", "a", produto1);
            repository6.save(local1);

            Usuario usuario = new Usuario("a", "20/12/1223", "a@a", "a");
            repository5.save(usuario);

            // Build
            Build build = new Build("build1", "sla", usuario);
            repository3.save(build);

            ItemBuild item = new ItemBuild(2, build, local1);
            // item
            repository4.save(item);

        };
    }

}