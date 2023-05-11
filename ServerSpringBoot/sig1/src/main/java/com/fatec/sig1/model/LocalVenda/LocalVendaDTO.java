package com.fatec.sig1.model.LocalVenda;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fatec.sig1.model.Produto.Produto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LocalVendaDTO {

    @NotNull(message = "Preco é requerido")
    private float preco;
    @NotBlank(message = "Vendedor é requerido")
    private String vendedor;
    @NotBlank(message = "Link do Produto é requerido")
    private String linkProduto;
    @JsonIncludeProperties("id")
    private LocalVenda localvenda;
    @JsonIncludeProperties("id")
    private Produto produto;

    public LocalVendaDTO(float Preco, String Vendedor, String LinkProduto, Produto produto) {
        this.preco = Preco;
        this.vendedor = Vendedor;
        this.linkProduto = LinkProduto;
        this.produto = produto;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float Preco) {
        preco = Preco;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String Vendedor) {
        Vendedor = vendedor;
    }

    public String getlinkProduto() {
        return linkProduto;
    }

    public void setLinkProduto(String LinkProduto) {
        linkProduto = LinkProduto;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public LocalVenda retornaUmaLocalVenda() {
        return new LocalVenda(preco, vendedor, linkProduto, produto);
    }
}