package com.fatec.sig1.model.Build;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class BuildDTO {

    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotNull(message = "Modelo é requerido")
    private float Orcamento;
    @NotBlank(message = "Preço é requerido")
    private String Descricao;

    public BuildDTO(String Nome, float Orcamento, String Descricao) {
        this.nome = Nome;
        this.Orcamento = Orcamento;
        this.Descricao = Descricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String Nome) {
        nome = Nome;
    }

    public float getOrcamento() {
        return Orcamento;
    }

    public void setOrcamento(float orcamento) {
        Orcamento = orcamento;
    }

    public String getDescricao() {
        return Descricao;
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public Build retornaUmaBuild() {
        return new Build(Orcamento, Descricao, nome);
    }

}