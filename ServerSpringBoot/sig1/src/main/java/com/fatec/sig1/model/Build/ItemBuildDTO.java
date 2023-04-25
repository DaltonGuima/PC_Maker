package com.fatec.sig1.model.Build;

import com.fatec.sig1.model.Produto.Produto;

import jakarta.validation.constraints.NotNull;

public class ItemBuildDTO {
    @NotNull(message = "A Quantidade é requerida")
    private int Quantidade;
    private Build build;
    private Produto produto;

    public ItemBuildDTO(int Quantidade, Build build, Produto produto) {
        this.Quantidade = Quantidade;
        this.build = build;
        this.produto = produto;
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

    public ItemBuild retornaItensBuild() {
        return new ItemBuild(Quantidade, build, produto);
    }

}
