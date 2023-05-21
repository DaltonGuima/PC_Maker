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
    private int quantidade;
    @NotNull(message = "O SubTotal é requerida")
    private double subtotal;
    @ManyToOne
    @JoinColumn(name = "build_id")
    @JsonIncludeProperties({ "id", "nome" })
    private Build build;
    @ManyToOne(cascade = { CascadeType.MERGE })
    @JoinColumn(name = "produto_id", nullable = false)
    @JsonIncludeProperties({ "id", "categoria" })
    private Produto produto;

    public ItemBuild() {
    }

    public ItemBuild(int quantidade, Build build, Produto produto, double subtotal) {
        this.quantidade = quantidade;
        this.build = build;
        this.produto = produto;
        this.subtotal = subtotal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getSubtotal() {
        return quantidade * getProduto().getCusto();
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
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
