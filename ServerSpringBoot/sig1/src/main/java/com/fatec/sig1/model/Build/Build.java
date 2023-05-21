package com.fatec.sig1.model.Build;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fatec.sig1.model.Usuario.Usuario;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

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
import jakarta.validation.constraints.Pattern;

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
    private List<ItemBuild> item = new ArrayList<>();
    @NotBlank(message = "Descrição é requerida")
    private String Descricao;
    @Pattern(regexp = "^(0?[1-9]|[12][0-9]|3[01])[\\/-](0?[1-9]|1[012])[\\/-]\\d{4}$", message = "A data de cadastro deve estar no formato dd/MM/YYYY")
    private String dataCadastro;
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

    // public float getOrcamento() {
    // return Orcamento;
    // }

    // public void setOrcamento(float orcamento) {
    // Orcamento = orcamento;
    // }

    public String getDescricao() {
        return Descricao;
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public Build(
            // float orcamento,
            String descricao,
            String nome,
            Usuario usuario,
            List<ItemBuild> item) {
        // Orcamento = orcamento;
        this.Descricao = descricao;
        setDataCadastro(new DateTime());
        this.nome = nome;
        this.usuario = usuario;
        this.item = item;

    }

    public Build(
            // float orcamento,
            String descricao,
            String nome,
            Usuario usuario,
            Set<ItemBuild> itens,
            List<ItemBuild> item) {
        // Orcamento = orcamento;
        this.Descricao = Descricao;
        setDataCadastro(new DateTime());
        this.nome = nome;
        this.usuario = usuario;
        this.itens = itens;
        this.item = item;
    }

    public double getValorTotal() {
        double soma = 0.0;
        for (ItemBuild ip : item) {
            soma = soma + ip.getSubtotal();
        }
        return soma;
    }

    public List<ItemBuild> getItem() {
        return item;
    }

    public void setItem(List<ItemBuild> item) {
        this.item = item;
    }

    public String getDataCadastro() {
        return dataCadastro;
    }

    public String obtemDataAtual(DateTime dataAtual) {
        DateTimeFormatter fmt = DateTimeFormat.forPattern("dd/MM/YYYY");
        return dataAtual.toString(fmt);
    }

    public void setDataCadastro(DateTime dataAtual) {
        this.dataCadastro = obtemDataAtual(dataAtual);
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
