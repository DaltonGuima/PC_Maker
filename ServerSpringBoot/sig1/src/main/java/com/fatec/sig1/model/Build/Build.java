package com.fatec.sig1.model.Build;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fatec.sig1.model.Usuario.Usuario;

import org.joda.time.DateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
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
    @OneToMany(mappedBy = "build", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnoreProperties("build")
    private Set<ItemBuild> itens = new HashSet<ItemBuild>();
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonIncludeProperties("id")
    private Usuario usuario;

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
            String nome,
            Usuario usuario) {
        Orcamento = orcamento;
        Descricao = descricao;
        this.nome = nome;
        this.usuario = usuario;
    }

    public Build(float orcamento,
            String descricao,
            String nome,
            Usuario usuario,
            Set<ItemBuild> itens) {
        Orcamento = orcamento;
        Descricao = descricao;
        this.nome = nome;
        this.usuario = usuario;
        this.itens = itens;
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

    public Set<ItemBuild> getItens() {
        return itens;
    }

    public void setItens(Set<ItemBuild> itens) {
        this.itens = itens;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}
