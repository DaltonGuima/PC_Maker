package com.fatec.sig1.model.Cliente;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class ClienteDTO {
	@NotBlank(message = "Nome é requerido")
	private String nome;
	@Pattern(regexp = "^(0?[1-9]|[12][0-9]|3[01])[\\/-](0?[1-9]|1[012])[\\/-]\\d{4}$", message = "A data de nascimento deve estar no formato dd/MM/YYYY")
	private String dataNascimento;
	@NotBlank(message = "Sexo M/F")
	private String sexo;
	@CPF
	private String cpf;
	@NotBlank(message = "O CEP é obrigatório.")
	private String cep;
	@NotBlank(message = "O complemento é obrigatório.")
	private String complemento;

	public ClienteDTO(String nome, String dataNascimento, String sexo, String cpf, String cep, String complemento) {
		this.nome = nome;
		setDataNascimento(dataNascimento);
		this.sexo = sexo;
		this.cpf = cpf;
		this.cep = cep;
		this.complemento = complemento;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public Cliente retornaUmCliente() {
		return new Cliente(nome, dataNascimento, sexo, cpf, cep, complemento);
	}
}