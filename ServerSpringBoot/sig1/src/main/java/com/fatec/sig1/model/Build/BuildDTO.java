package com.fatec.sig1.model.Build;

import java.util.HashSet;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fatec.sig1.model.Usuario.Usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class BuildDTO {

    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotNull(message = "Preço é requerido")
    private List<ItemBuild> item = new ArrayList<>();
    @NotBlank(message = "Descrição é requerido")
    private String descricao;
    @JsonIncludeProperties("id")
    private Usuario usuario;
    @JsonIgnoreProperties("build")
    private Set<ItemBuild> itens = new HashSet<ItemBuild>();

    public BuildDTO(String Nome, List<ItemBuild> item, String descricao, Usuario usuario, Set<ItemBuild> itens) {
        this.nome = Nome;
        this.item = item;
        this.descricao = descricao;
        this.usuario = usuario;
        this.itens = itens;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String Nome) {
        nome = Nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Build retornaUmaBuild() {
        return new Build(nome, descricao, itens, usuario);
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