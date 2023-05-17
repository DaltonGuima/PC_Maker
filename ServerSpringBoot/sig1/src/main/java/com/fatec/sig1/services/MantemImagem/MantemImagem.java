package com.fatec.sig1.services.MantemImagem;

import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.fatec.sig1.model.Imagem.Imagem;

public interface MantemImagem {
    public Imagem salvar(MultipartFile arquivo) throws IOException;

    public List<Imagem> getAll();

    public byte[] getImagem(String nomeArquivo);
}