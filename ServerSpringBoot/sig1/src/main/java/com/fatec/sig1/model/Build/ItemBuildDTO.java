package com.fatec.sig1.model.Build;

import com.fatec.sig1.model.Produto.Produto;

import jakarta.validation.constraints.NotNull;

public class ItemBuildDTO {
    @NotNull(message = "A Quantidade é requerida")
    private int quantidade;
    @NotNull(message = "O Subtotal é requerida")
    private float subtotal;
    private Build build;
    private Produto produto;

    public ItemBuildDTO(int quantidade, float subtotal, Build build, Produto produto) {
        this.quantidade = quantidade;
        this.subtotal = subtotal;
        this.build = build;
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public float getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(float subtotal) {
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

    public ItemBuild retornaItensBuild() {
        return new ItemBuild(quantidade, subtotal, build, produto);
    }

}
