package com.fatec.sig1.model.Build;

import com.fatec.sig1.model.LocalVenda.LocalVenda;

import jakarta.validation.constraints.NotNull;

public class ItemBuildDTO {
    @NotNull(message = "A Quantidade é requerida")
    private int quantidade;
    private Build build;
    private LocalVenda localVenda;

    public ItemBuildDTO(int quantidade, Build build, LocalVenda localVenda) {
        this.quantidade = quantidade;
        this.build = build;
        this.localVenda = localVenda;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public Build getBuild() {
        return build;
    }

    public void setBuild(Build build) {
        this.build = build;
    }

    public ItemBuild retornaItensBuild() {
        return new ItemBuild(quantidade, build, localVenda);
    }

    public LocalVenda getLocalVenda() {
        return localVenda;
    }

    public void setLocalVenda(LocalVenda localVenda) {
        this.localVenda = localVenda;
    }

}
