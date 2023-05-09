package com.fatec.sig1.model.Build;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fatec.sig1.model.Usuario.Usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class BuildDTO {

    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotNull(message = "Modelo é requerido")
    private float Orcamento;
    @NotBlank(message = "Preço é requerido")
    private String Descricao;
    @JsonIncludeProperties("id")
    private Usuario usuario;
    @JsonIgnoreProperties("build")
    private Set<ItemBuild> itens = new HashSet<ItemBuild>();

    public BuildDTO(String Nome, float Orcamento, String Descricao, Usuario usuario, Set<ItemBuild> itens) {
        this.nome = Nome;
        this.Orcamento = Orcamento;
        this.Descricao = Descricao;
        this.usuario = usuario;
        this.itens = itens;
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
        return new Build(Orcamento, Descricao, nome, usuario, itens);
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Set<ItemBuild> getItens() {
        return itens;
    }

    public void setItens(Set<ItemBuild> itens) {
        this.itens = itens;
    }

}