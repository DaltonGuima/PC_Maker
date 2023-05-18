package com.fatec.sig1.services.MantemImagem;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.fatec.sig1.model.Imagem.Imagem;
import com.fatec.sig1.model.Repositorys.MantemImagemRepository;

@Service
public class MantemImagemI implements MantemImagem {
    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    private MantemImagemRepository imagemRepository;
    private Environment environment = null;

    public MantemImagemI(MantemImagemRepository imagemRepository, Environment environment) {
        this.imagemRepository = imagemRepository;
        this.environment = environment;
    }

    public Imagem salvar(MultipartFile arquivo) throws IOException {
        // **********************************************************
        // Obter informações sobre o arquivo
        // **********************************************************
        String nome = arquivo.getOriginalFilename();
        String tipo = arquivo.getContentType();
        long tamanho = arquivo.getSize();
        byte[] conteudo = arquivo.getBytes();
        // Obtem o conteúdo do arquivo
        // *********************************************************
        // Processar o arquivo
        // *********************************************************
        // String nomeArquivo = UUID.randomUUID().toString() + "_" +
        // arquivo.getOriginalFilename();
        // String caminhoArquivo = environment.getProperty("imagem.upload-dir") + "/" +
        // nomeArquivo;
        // Path caminhoCompleto =
        // Paths.get(caminhoArquivo).toAbsolutePath().normalize(); //Falar com o dalton
        Path caminhoArquivo = Paths.get("imagens/" + nome);
        Imagem imagem = new Imagem();
        imagem.setNome(arquivo.getOriginalFilename());
        imagem.setCaminho(caminhoArquivo.toString());
        imagem.setArquivo(arquivo.getBytes());
        logger.info(">>>>>> servico mantem imagem salvar - no disco e no db executado");
        // ***********************************************************
        // salva no disco e no db
        // ***********************************************************
        Files.write(caminhoArquivo, arquivo.getBytes());
        return imagemRepository.save(imagem);
    }

    public List<Imagem> getAll() {
        return imagemRepository.findAll();
    }

    public byte[] getImagem(String nomeArquivo) {
        Imagem dbImagem = imagemRepository.findByNome(nomeArquivo).get();
        return dbImagem.getArquivo();
    }
}