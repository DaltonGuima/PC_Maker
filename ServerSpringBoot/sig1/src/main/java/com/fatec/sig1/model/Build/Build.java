package com.fatec.sig1.model.Build;

import java.util.List;
import java.util.Set;

import org.joda.time.DateTime;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Build {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotNull(message = "Preço é requerido")
    private float Orcamento;
    @NotBlank(message = "Descrição é requerida")
    private String Descricao;

    public Build() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Build(float orcamento,
            String descricao,
            String nome) {
        Orcamento = orcamento;
        Descricao = descricao;
        this.nome = nome;

    }

    public static void setDataCadastro(DateTime dateTime) {
    }

    public void obtemDataAtual(DateTime dateTime) {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
