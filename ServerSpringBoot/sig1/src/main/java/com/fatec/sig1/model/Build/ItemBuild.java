package com.fatec.sig1.model.Build;

import jakarta.persistence.Id;

import org.joda.time.DateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fatec.sig1.model.Produto.Produto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
public class ItemBuild {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "A Quantidade é requerida")
    private int Quantidade;
    @ManyToOne
    @JoinColumn(name = "build_id")
    @JsonIncludeProperties({ "id", "nome" })
    private Build build;
    @ManyToOne(cascade = { CascadeType.MERGE })
    @JoinColumn(name = "produto_id", nullable = false)
    @JsonIncludeProperties("id")
    private Produto produto;

    public ItemBuild() {
    }

    public ItemBuild(int quantidade, Build build, Produto produto) {
        Quantidade = quantidade;
        this.build = build;
        this.produto = produto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantidade() {
        return Quantidade;
    }

    public void setQuantidade(int quantidade) {
        Quantidade = quantidade;
    }

    public Build getBuild() {
        return build;
    }

    public void setBuild(Build build) {
        this.build = build;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void obtemDataAtual(DateTime dateTime) {
    }

    public static void setDataCadastro(DateTime dateTime) {
    }

}
