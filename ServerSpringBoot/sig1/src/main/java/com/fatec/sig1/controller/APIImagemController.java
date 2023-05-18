package com.fatec.sig1.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fatec.sig1.model.Imagem.Imagem;
import com.fatec.sig1.model.Repositorys.MantemImagemRepository;
import com.fatec.sig1.services.MantemImagem.MantemImagem;

@RestController
@RequestMapping("/api/v1/imagens")
public class APIImagemController {
    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    private MantemImagem servicoMantemImagem;

    @GetMapping
    public List<Imagem> getTodasImagens() {
        logger.info(">>>>>> controller api listar imagens get chamado ");
        return servicoMantemImagem.getAll();
    }

    @GetMapping("/{nomeArquivo}")
    public ResponseEntity<Resource> getImagem(@PathVariable String nomeArquivo) {
        try {
            Path caminhoArquivo = Paths.get("imagens/" + nomeArquivo);
            Resource resource = new UrlResource(caminhoArquivo.toUri());
            logger.info(">>>>>> controller getImagem caminho do arquivo => " + caminhoArquivo.toString());
            if (resource.exists()) {
                return ResponseEntity.ok()
                        // .contentType(MediaType.IMAGE_JPEG)
                        .contentType(MediaType.parseMediaType("application/octet-stream"))
                        .header(HttpHeaders.CONTENT_DISPOSITION,
                                "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/db/{nomeArquivo}") 
    public ResponseEntity<byte[]> 
    getImagemDB(@PathVariable String nomeArquivo) { 
        byte[] arquivo = servicoMantemImagem.getImagem(nomeArquivo); 
        return ResponseEntity.status(HttpStatus.OK).body(arquivo); }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<String> handleFileUpload(MultipartFile file) {
        logger.info(">>>>>> api manipula file upload chamado");
        if (!file.isEmpty()) {
            logger.info(">>>>>> api manipula file upload file nao esta vazio");
            try {
                logger.info(">>>>>> api manipula file upload chamou servico salvar");
                servicoMantemImagem.salvar(file);
                return ResponseEntity.ok().body("Imagem enviada com sucesso");
            } catch (FileNotFoundException e) {
                logger.info(">>>>>> api manipula file upload arquivo não encontrado");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Arquivo nao encontrado");
            } catch (FileUploadException e) {
                logger.info(">>>>>> api manipula file upload erro no upload");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Falha ao enviar o arquivo");
            } catch (IOException e) {
                logger.info(">>>>>> api manipula file upload erro de i/o => " + e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Falha erro de I/O");
            }
        } else {
            logger.info(">>>>>> api manipula file arquivo vazio ");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Arquivo vazio");
        }
    }

    
}